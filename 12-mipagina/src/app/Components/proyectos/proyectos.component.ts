import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosAMostrar: any = [];
  proyectos = [
    {
     titulo: "SpotyApp",
     descripcion: "Es un prototipo de página web que permite visualizar y escuchar las musicas de cualquier artista. Además, se puede buscar alguna canción o artista en especifico. Este prototipo fue construido utilizando el Framework Angular en la que se utilizó HTML, CSS y Typescript. Este prototipo se conecta a la API de Spotify.",
     link: "https://github.com/jonathanvargas2016/Proyectos_en_Angular/tree/desarrollador/04-spotyapp",
     tipo: "Frontend"
    }, {
      titulo: "BioApp",
      descripcion: "Es un prototipo de página web que permite al usuario comprar productos de bioseguridad. Esta pagina fue hecha para el Backend, construida en el Framework NestJS utilizando HTML, CSS y el lenguaje de programación Typescript. Toda la información que recopila la aplicación se almacena en la base de datos MySQL.",
      link: "https://n9.cl/582et",
      tipo: "Backend"
    }, {
      titulo: "UStudy",
      descripcion: "Es un aplicativo móvil construido en Android Studio utilizando el lenguaje de programación Kotlin. Lo que permite esta aplicación es contactar a profesores disponibles en brindar clases de las materias básicas (matemáticas, física, química y geometría). Toda la información que recopila la aplicación se almacena en la plataforma Firebase. Esta aplicación fue hecha por estudiantes dinámicos y colaboradores de la Escuela Politécnica Nacional. ",
      link: "https://github.com/jonathanvargas2016/proyecto_Moviles}{UStudy",
      tipo: "Movil"
    }
    ]

  constructor() { }

  ngOnInit(): void {
    this.mostrarProyectos('Todos');
  }
  mostrarProyectos(tipo: string){
    if(tipo == 'Todos'){
      this.proyectosAMostrar = this.proyectos;
    }else{
      this.proyectosAMostrar = [];
      this.proyectos.forEach((actual, index)=>{
        if(actual.tipo == tipo){
          this.proyectosAMostrar.push(actual);
        }
      })
    }
  }

}
