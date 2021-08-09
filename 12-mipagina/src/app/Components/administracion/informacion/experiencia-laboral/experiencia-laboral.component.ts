import { Component, OnInit } from '@angular/core';
import {ExperienciaService} from "../../../../Servicios/experiencia.service";

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

  constructor(public readonly expLaboralService: ExperienciaService) { }

  ngOnInit(): void {
  }
  guardarExperienciaLaboral(){
    try {
      this.expLaboralService.cargarFormExperiencia(this.experienciaLaboral)
    }catch (e){
      throw e;
    }
  }

}
