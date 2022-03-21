import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthService} from "../Servicios/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private authService: AuthService) {
  }
  canActivate(): boolean{
    if(this.authService.aIniciadoSesion){
      return true;
    }else{
      this._router.navigate(['/login']).then();
      return false;
    }
  }

}
