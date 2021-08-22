import { Component, OnInit } from '@angular/core';
import {EducacionService} from "../../../../Servicios/educacion.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionFormComponent implements OnInit {
  tituloCapturadoImg: any;
  errorImgTitulo = false;
  errorFechaInicioMayor = false;

  educacion: any = {
    titulo: '',
    ubicacion: '',
    fechaInicio: '',
    fechaFin: '',
    img: '',
  }
  constructor(public readonly eduService: EducacionService) { }

  ngOnInit(): void {
  }

  guardarEducacion(){

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
        this.verificarErrores()
        if (this.tituloCapturadoImg && !this.errorFechaInicioMayor) {
          this.eduService.cargarFormEducacion(this.tituloCapturadoImg, this.educacion)
        }
      }
    })
  }

  capturarTituloImg(event:any){
    this.tituloCapturadoImg = event.target.files[0]
  }
  verificarErrores(){
    const fechaInicio = new  Date(this.educacion.fechaInicio);
    const fechaFin = new Date(this.educacion.fechaFin);

    if(fechaInicio >= fechaFin){
      this.errorFechaInicioMayor = true
    }else{
      this.errorFechaInicioMayor = false
    }

    if(this.tituloCapturadoImg === undefined){
      this.errorImgTitulo = true;
    }else{
      this.errorImgTitulo = false;
    }
  }

}
