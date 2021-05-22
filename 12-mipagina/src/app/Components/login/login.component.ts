import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

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

  constructor() {}

  ngOnInit(): void {
  }

  guardar(forma: NgForm): void{
    console.log(forma)

  }

}
