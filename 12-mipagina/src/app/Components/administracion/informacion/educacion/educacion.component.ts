import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionFormComponent implements OnInit {
  educacion: any = {
    titulo: '',
    ubicacion: '',
    fechaInicio: '',
    fechaFin: '',
    img: '',
    link: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardarEducacion(){
    console.log(this.educacion)
  }

}
