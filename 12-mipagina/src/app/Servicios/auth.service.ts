import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import auth from 'firebase/app';
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;
  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string){
    let resp;
    try{
      resp = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isLogged = true;
    }catch (error){
      resp = error;
    }
    return resp;
  }

  async logout(){
    let resp;
    try {
      resp = await this.afAuth.signOut();
      this.isLogged = false;
    }catch (error) {
      resp = error;
    }
    return resp;
  }

  // recuperar usuario actual logeado
  getUsuarioActual(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
