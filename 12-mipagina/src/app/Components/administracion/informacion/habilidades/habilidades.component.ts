import { Component, OnInit } from '@angular/core';
import {HabilidadService} from "../../../../Servicios/habilidad.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-habilidades-form',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: any = {
    tipo: '',
    nombreHabilidad: ''
  }
  tiposHabilidad = ['Programación', 'Base de datos', 'Frameworks', 'Sistemas Operativos', 'Idiomas', 'Otros']
  constructor(public readonly habService: HabilidadService) { }

  ngOnInit(): void {
  }
  guardarHabilidad(){

    Swal.fire({
      title: 'Desea guardar los datos?',
      text:'Tus datos se guardarán y podrás modificarlos mas tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar datos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.habService.cargarFormularioHabilidad(this.habilidad)
      }
    })

  }


}
