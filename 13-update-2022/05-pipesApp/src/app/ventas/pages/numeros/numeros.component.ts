import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 2535535.988;
  porcentaje: number = 0.48986;

  constructor() {}

  ngOnInit(): void {}
}
