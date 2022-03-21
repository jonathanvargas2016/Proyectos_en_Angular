import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathHabilidad = 'habilidades';
  espera = false;
  cargado = false;
  mensajeError = "";
  constructor(private readonly afs: AngularFirestore,
              public readonly authService: AuthService,) {
    this.itemsCollection = afs.collection<any>(this.pathHabilidad)
  }

  cargarFormularioHabilidad(habilidad: any){
    this.espera = true
    habilidad.uid = this.authService.usuario.uid
    this.itemsCollection.add(habilidad).then((a)=>{
      habilidad.DocumentReference = a.id
      console.log(habilidad.DocumentReference)
      this.cargado = true;
      this.espera = false;
      this.mensajeError = "";
    }).catch((error)=> {
      this.mensajeError = error.message
      this.cargado = false;
      this.espera = false;
    })
  }
  // getHabilidades(){
  //
  //   this.itemsCollection = this.afs.collection<any>(this.pathHabilidad)
  //   return this.itemsCollection.snapshotChanges().pipe(map((resp)=>{
  //     return resp;
  //   }))
  //
  //
  //
  // }


}
