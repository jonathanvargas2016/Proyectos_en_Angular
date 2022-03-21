import { Component, OnInit } from '@angular/core';

// Formularios
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

    .ng-invalid.ng-touched:not(form){
      border:1px solid red;
    }
    `
  ]
})
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    condicion: false
  };
  ejemploEmail = 'example@email.com';

  paises = [{codigo: 'CRI', nombre: 'Costa Rica'}, {codigo: 'Es', nombre: 'España'}];

  sexo: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm): void{
    console.log('formulario posteado');
    console.log(forma);
    // imprimir valores de cajas
    console.log(forma.value);
  }

}
