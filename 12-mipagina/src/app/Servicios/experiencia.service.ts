import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathExpLaboral = 'experiencia_laboral';
  espera = false;
  cargado = false;
  mensajeError = "";

  constructor(private readonly afs: AngularFirestore,
              public readonly authService: AuthService,) {
    this.itemsCollection = afs.collection<any>(this.pathExpLaboral)
  }

  cargarFormExperiencia(experiencia: any){
    this.espera = true
    experiencia.uid = this.authService.usuario.uid
    this.itemsCollection.add(experiencia).then(()=>{
      this.cargado = true;
      this.espera = false;
    }).catch((error)=> this.mensajeError = error)
  }
}
