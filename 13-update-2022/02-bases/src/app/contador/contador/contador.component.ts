import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: {{ base }}</h3>

    <button type="button" class="btn" (click)="acumular(base)">
      +{{ base }}
    </button>

    <span>{{ numero }} </span>

    <button type="button" class="btn" (click)="acumular(-base)">
      -{{ base }}
    </button>
  `,
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    constructor() {}
  
    acumular(valor: number): number {
      return (this.numero += valor);
    }

}
