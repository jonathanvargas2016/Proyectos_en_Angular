import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit {
  miPersona = {
    nombre: 'Jonathan Santiago Vargas Nilve',
    especialidad: 'Egresado en Ingeniería en Sistemas Informáticos y de Computación de la Escuela Politécnica Nacional',
    perfilProfesional: 'Soy egresado de la Facultad de Sistemas de la Escuela Politécnica Nacional, ' +
      'me considero una persona responsable, dinámica y creativa, con facilidad de adaptación y ' +
      'capacidad para trabajar en equipo, en condiciones de alta presión, con iniciativa para resolver ' +
      'problemas eficientemente y lograr los objetivos y metas propuestos por la empresa. '
  }
  informacionContacto = {
    correoPersonal: 'jonathan.1996mds@gmail.com',
    correoInstitucional: 'jonathan.vargas01@epn.edu.ec',
    celular: '0983774891',
    direccion: 'San Luis de Chillogallo calle S33A',
  }

  habilidades = ['Javascript', 'Typescript', 'Firebase', 'SQL Server', 'Angular', 'NestJS'
    ,'HTML', 'CSS', 'MySQL', 'Java', 'React']

  constructor() { }

  ngOnInit(): void {
  }

}
