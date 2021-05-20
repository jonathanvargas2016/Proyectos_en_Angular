import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  programacion = ['Python', 'Javscript', 'Java', 'Typescript', 'HTML', 'Kotlin', 'C#'];
  frameworks = ['Angular', 'ReactJS', 'NestJS'];
  idiomas = ['Inglés'];
  sistemasOperativos = ['Windows', 'Linux'];
  baseDatos = ['SQL Server', 'Mysql'];
  otros = ['Firebase', 'Github']

  constructor() { }

  ngOnInit(): void {
  }

}
