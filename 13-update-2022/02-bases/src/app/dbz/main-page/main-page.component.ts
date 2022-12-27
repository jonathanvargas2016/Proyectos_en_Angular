import { Component, OnInit } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces/ipersonaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  personajes: IPersonaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  agregar(nuevoPersonaje: IPersonaje): void {
    this.personajes = [...this.personajes, nuevoPersonaje];
  }
}
