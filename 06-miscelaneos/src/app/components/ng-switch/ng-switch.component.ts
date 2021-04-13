import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta:string
  bandera = true


  constructor() {
    this.alerta = "info"
  }

  ngOnInit(): void {
  }

  cambiar(){
    this.alerta = "danger"
    this.bandera = false
  }


}
