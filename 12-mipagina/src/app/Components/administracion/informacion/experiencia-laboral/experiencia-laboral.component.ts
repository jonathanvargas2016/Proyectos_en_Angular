import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral-form',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciaLaboral = {
    uid: '',
    lugar: '',
    fechaInicio: '',
    fechaFin: '',
    cargo: '',
    funciones: '',
    referencias: {
      bandera: false,
      refUno: {
        nombre: '',
        cargo: '',
        telf: ''
      },
      refDos: {
        nombre: '',
        cargo: '',
        telf: ''
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }
  guardarExperienciaLaboral(){
    console.log(this.experienciaLaboral)
  }

}
