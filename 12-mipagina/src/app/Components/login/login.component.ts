import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../Servicios/auth.service";

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  guardar(): void{
     this.authService.login(this.credenciales.correo, this.credenciales.password)
  }

}
