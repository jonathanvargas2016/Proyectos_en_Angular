import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'jonathan';
  nombreUpper: string = 'JONATHAN';
  nombreCompleto: string = 'jOnAThaN VarGAs';

  constructor() {}

  ngOnInit(): void {}
}
