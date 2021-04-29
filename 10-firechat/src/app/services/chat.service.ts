import { Injectable } from '@angular/core';

// firebase
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

// autenticacion con firebase
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';

// interface
import {Mensaje} from '../interface/mensaje.interface';

// map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  // carga de mensajes
  public chats: Mensaje[] = [];
  // usuario manda un mensaje
  public usuario: any = {};

  constructor(private db: AngularFirestore,
              private auth: AngularFireAuth) {
    this.auth.authState.subscribe( user => {
      if (!user){
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }
  // autenticacion
  login(proveedor: string): void{
    if (proveedor === 'google'){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }
  logout(): void{
    this.usuario = [];
    this.auth.signOut();
  }
  // mentodo para extraer mensaje de firebase
  cargarMensaje(): any{
    this.itemsCollection = this.db.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
    // Observable pendiente de todos los cambios
    // observable tiene la palabra subscribe
    return this.itemsCollection.valueChanges().pipe(map((mensajes: Mensaje[]) => {
      this.chats = [];
      for (const mensaje of mensajes){
        // funcion unshift(). inserta en la primera posicion
        this.chats.unshift(mensaje);
      }
      return this.chats;
    }));
  }
// metodo para insertar en firebase
  agregarMensaje(texto: string): any{
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add(mensaje);
  }




}
