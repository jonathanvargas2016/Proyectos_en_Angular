import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mensajeErrorLogin = "";
  usuario = {
    uid: '',
    email: ''
  };
  aIniciadoSesion = false;

  constructor(public afAuth: AngularFireAuth) {

    if(localStorage.getItem('logeado')){
      this.aIniciadoSesion = true;
    }else{
      this.aIniciadoSesion = false;
    }
    this.getDatos()
  }

  getDatos(){
    return this.afAuth.user.subscribe(user =>{
      if(user){
        this.usuario.uid = user.uid
      }
    });
  }

  async login(email: string, password: string){

    try {
      await this.afAuth.signInWithEmailAndPassword(email, password)
      this.aIniciadoSesion = true;
      localStorage.setItem('logeado', "true");
    }catch (error){
      this.mensajeErrorLogin = error.message;
    }

  }

  async logout(){
    try {
      await this.afAuth.signOut();
      this.aIniciadoSesion = false;
      localStorage.removeItem('logeado');
    }catch (error){
      throw error;
    }

  }

}
