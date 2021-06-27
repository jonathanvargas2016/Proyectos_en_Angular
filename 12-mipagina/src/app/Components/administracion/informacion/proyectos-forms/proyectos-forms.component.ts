import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-forms',
  templateUrl: './proyectos-forms.component.html',
  styleUrls: ['./proyectos-forms.component.css']
})
export class ProyectosFormsComponent implements OnInit {

  proyectos = {
    uid: '',
    titulo: '',
    descripcion: '',
    imagen: '',
    enlace: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  guardarProyecto(){

  }

}
