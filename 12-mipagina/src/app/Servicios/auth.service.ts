import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mensajeErrorLogin = "";
  usuario: any = {}
  aIniciadoSesion = false;

  constructor(public afAuth: AngularFireAuth) {

    if(localStorage.getItem('user') == null){
      return;
    }
    this.aIniciadoSesion = true;
    const data = localStorage.getItem('user');
    if(data){
      this.usuario = JSON.parse(data);
    }
  }

  async login(email: string, password: string){
    try{
      const resp = await this.afAuth.signInWithEmailAndPassword(email, password)
      if(resp){
        this.aIniciadoSesion = true;
        localStorage.setItem('user', JSON.stringify(resp.user));
      }
    }catch (error){
      this.mensajeErrorLogin = error.message;
    }

  }

  logout(){
    this.afAuth.signOut();
    this.aIniciadoSesion = false;
    localStorage.removeItem('user');
  }

}
