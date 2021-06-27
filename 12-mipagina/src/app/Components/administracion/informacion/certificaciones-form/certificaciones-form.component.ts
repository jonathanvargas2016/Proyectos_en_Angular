import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones-form',
  templateUrl: './certificaciones-form.component.html',
  styleUrls: ['./certificaciones-form.component.css']
})
export class CertificacionesFormComponent implements OnInit {

  certificaciones = {
    uid: '',
    img: '',
    titulo: '',
    enlace: ''
  }


  constructor() { }

  ngOnInit(): void {
  }
  guardarCertificaciones(){

  }

}
