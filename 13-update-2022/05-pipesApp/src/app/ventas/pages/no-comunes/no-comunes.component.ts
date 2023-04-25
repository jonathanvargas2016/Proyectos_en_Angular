import { Component } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Susan';
  genero: string = 'femenino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18Plural
  clientes: string[] = ['María', 'Pedro', 'Hulk', 'Ronny'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  constructor() {}

  cambiarPersona() {
    (this.nombre = 'Abel Ferreria'), (this.genero = 'masculino');
  }
  borrarCliente() {
    this.clientes.pop();
  }

  // keyValue
  persona = {
    nombre: 'Jonathan',
    edad: 26,
    direccion: 'Chillogallo',
  };

  // jsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Observable

  miObservable$ = interval(1000);
}
