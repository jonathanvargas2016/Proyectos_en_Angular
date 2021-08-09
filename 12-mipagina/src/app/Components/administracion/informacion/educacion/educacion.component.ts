import { Component, OnInit } from '@angular/core';
import {EducacionService} from "../../../../Servicios/educacion.service";

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionFormComponent implements OnInit {
  tituloCapturadoImg: any;
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
    try{
      this.eduService.cargarFormEducacion(this.tituloCapturadoImg, this.educacion)
    }catch (e){
      throw  e
    }

  }

  capturarTituloImg(event:any){
    this.tituloCapturadoImg = event.target.files[0]
  }

}
