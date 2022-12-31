import { Injectable } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces/ipersonaje';

@Injectable()
export class DbzService {
  private _personajes: IPersonaje[] = [
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

  get personajes(): IPersonaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(personaje: IPersonaje): void {
    this._personajes = [...this._personajes, personaje];
  }
}
