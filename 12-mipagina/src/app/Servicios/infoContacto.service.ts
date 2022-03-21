import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
  })
export class  InfoContactoService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathIC = 'informacionContacto'
  espera = false;
  cargado = false;
  mensajeError = "";
  constructor(
    public readonly authService: AuthService,
    private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>(this.pathIC)
  }

  cargarInformacionContacto(infoContacto: any){
    this.espera = true
    infoContacto.uid = this.authService.usuario.uid
    this.itemsCollection.add(infoContacto).then(()=>{
      this.mensajeError = ""
      this.cargado = true;
      this.espera = false;
    }).catch(error => {
      this.cargado = false;
      this.espera = false;
      this.mensajeError = error.message
    })
  }

  getInfoContacto(){
    this.itemsCollection = this.afs.collection<any>(this.pathIC)
    return this.itemsCollection.valueChanges().pipe(map(datos =>{
      return datos;
    }))
  }
}
