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
      this.cargado = true;
      this.espera = false;
    }).catch(error => this.mensajeError = error)
  }

  getInfoContacto(){
    this.itemsCollection = this.afs.collection<any>(this.pathIC)
    return this.itemsCollection.valueChanges().pipe(map(datos =>{
      return datos;
    }))
  }
}
