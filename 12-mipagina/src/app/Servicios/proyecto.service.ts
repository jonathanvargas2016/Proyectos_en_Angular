import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathProyecto = 'proyectos';
  espera = false;
  cargado = false;
  mensajeError: any;
  constructor(private readonly afs: AngularFirestore,
              public readonly authService: AuthService,
              private readonly storage: AngularFireStorage) {
    this.itemsCollection = afs.collection<any>(this.pathProyecto)
  }

  cargarFormProyecto(proyecto: any, proyImgCapturado: any){
    const id = Math.random().toString(36).substring(2)
    const filePath = `img/proy_${id}`
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, proyImgCapturado);
    this.espera = true;
    task.snapshotChanges().pipe(finalize( () =>{
      const observableUrl = fileRef.getDownloadURL();
      observableUrl.subscribe(url =>{
        proyecto.img = url;
        proyecto.uid = this.authService.usuario.uid
        this.itemsCollection.add(proyecto).then(()=>{
          this.mensajeError = ""
          this.cargado = true;
          this.espera = false;
        }).catch(error =>{
          this.mensajeError = error.message
          this.espera = false;
          this.cargado = false;
        })

      }, error => this.mensajeError = error)
    })).subscribe();
  }
}
