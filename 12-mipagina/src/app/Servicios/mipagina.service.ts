import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MipaginaService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathIP = 'informacionPersonal';
  arrayInfoPersonal: any[] = [];

  constructor(private readonly afs: AngularFirestore, public authService: AuthService) {
    this.itemsCollection = afs.collection<any>(this.pathIP)
  }

  async agregar(infoPersonal: any){
    infoPersonal.uid = this.authService.usuario.uid
    try{
      await this.itemsCollection.add(infoPersonal)
    }catch (error){
      console.log(error)
    }
  }
  getInfoPersonal(){
    this.itemsCollection = this.afs.collection<any>(this.pathIP)
    return this.itemsCollection.valueChanges().pipe(map(datosIP =>{
      return datosIP;
    }))

  }
}
