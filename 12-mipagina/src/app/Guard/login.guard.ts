import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthService} from "../Servicios/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _router: Router, private authService: AuthService) {
  }
  canActivate(): boolean{
    if(this.authService.aIniciadoSesion){
      this._router.navigateByUrl('/administracion').then()
      return false;
    }else{
      return true;
    }
  }

}
