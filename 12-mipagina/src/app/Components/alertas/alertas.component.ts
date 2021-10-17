import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  @Input() espera: boolean = false;
  @Input() cargado: boolean = false;
  constructor() {
  }
  ngOnInit(): void {
  }

}
