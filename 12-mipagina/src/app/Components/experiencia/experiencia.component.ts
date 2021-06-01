import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  bandera = false;
  banderab = false;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarBandera(): boolean{
    return this.bandera = !this.bandera;
  }
  cambiarBanderaB(): boolean{
    return this.banderab = !this.banderab;
  }

}
