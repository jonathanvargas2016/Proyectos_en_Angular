import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../Servicios/auth.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciales = {
    correo: '',
    password: ''
  }

  constructor(public _authService: AuthService,
              private _router: Router) {}

  ngOnInit(): void {
  }

  async guardar(){
    try {
      await this._authService.login(this.credenciales.correo, this.credenciales.password);
      await this._router.navigate(['/administracion'])
    }catch (error){
      await this._router.navigate(['/login'])
    }
  }
}
