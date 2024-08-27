import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {

  progreso1: number = 10;
  progreso2: number = 10;

  constructor() {
  }

  cambioValorHijo(valor: number){
    this.progreso1 = valor
  }

  get getProgreso1(): string {
    return `${this.progreso1}%`
  }

  get getProgreso2(): string {
    return `${this.progreso2}%`
  }

}
