import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathCertif = 'certificaciones';
  espera = false;
  cargado = false;
  mensajeError: any;
  constructor(private readonly afs: AngularFirestore,
              private readonly authService: AuthService,
              private readonly storage: AngularFireStorage) {
    this.itemsCollection = afs.collection<any>(this.pathCertif)
  }

  cargarFormCertificacion(certificacion: any, certCapturado: any){
    const id = Math.random().toString(36).substring(2)
    const filePath = `img/cert_${id}`
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, certCapturado);
    this.espera = true;
    task.snapshotChanges().pipe(finalize( () =>{
      const observableUrl = fileRef.getDownloadURL();
      observableUrl.subscribe(url =>{
        certificacion.img = url;
        certificacion.uid = this.authService.usuario.uid
        this.itemsCollection.add(certificacion).then(() =>{
          this.mensajeError = ""
          this.cargado = true;
          this.espera = false;
        }).catch( error =>{
          this.mensajeError = error.message
          this.cargado = false;
          this.espera = false;
        })

      }, error => this.mensajeError = error)
    })).subscribe();


  }


}
