import { Component, OnInit } from '@angular/core';
import {EducacionService} from "../../../../Servicios/educacion.service";

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionFormComponent implements OnInit {
  tituloCapturadoImg: any;
  errorImgTitulo = false;
  errorFechaInicioMayor = false;
  errorFechaFinVacio = false;
  errorFechaInicioVacio = false;
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
    this.verificarErrores()
    if(this.tituloCapturadoImg && !this.errorFechaInicioMayor && !this.errorFechaFinVacio && !this.errorFechaInicioVacio){
      try{
        this.eduService.cargarFormEducacion(this.tituloCapturadoImg, this.educacion)
      }catch (e){
        throw  e
      }
    }

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

    if(this.educacion.fechaInicio === ''){
      this.errorFechaInicioVacio = true;
    }else{
      this.errorFechaInicioVacio = false;
    }

    if(this.educacion.fechaFin === ''){
      this.errorFechaFinVacio = true;
    }else{
      this.errorFechaFinVacio = false;
    }
  }

}
