import { Component, OnInit } from '@angular/core';
import {ExperienciaService} from "../../../../Servicios/experiencia.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-experiencia-laboral-form',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  errorFechaInicio = false
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

    Swal.fire({
      title: 'Desea guardar los datos?',
      text: 'Tus datos se guardarán y podrás modificarlos mas tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar datos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.verificarErrores();
        if (!this.errorFechaInicio) {
          this.expLaboralService.cargarFormExperiencia(this.experienciaLaboral)
        }
      }
    })
  }
  verificarErrores(){
    const fechaInicio = new  Date(this.experienciaLaboral.fechaInicio);
    const fechaFin = new Date(this.experienciaLaboral.fechaFin);
    if(fechaInicio >= fechaFin){
      this.errorFechaInicio = true
    }else{
      this.errorFechaInicio = false
    }

  }

}
