import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <h1 [ngStyle]="{'color':colorTitulo}">
      ngStyle
    </h1>

    <p [style.fontSize.px]="tamano">
      hola mundo   {{tamano}}
    </p>

      <button (click)="controlarMas() " class = "btn btn-outline-primary"  type="button" name="button">
        +
      </button>

      <button (click)="controlarMenos()" class = "btn btn-outline-danger"  type="button" name="button">
        -
      </button>

  `
})
export class NgStyleComponent implements OnInit {

  tamano = 10;
  colorTitulo = 'yellow'
  constructor() {

  }

  ngOnInit(): void {
  }

  controlarMas(){
    this.tamano = this.tamano + 5
    if(this.tamano >= 50){
      return this.tamano = 50
    }
  }

  controlarMenos(){

    this.tamano = this.tamano - 5
    if(this.tamano <= 10){
      return this.tamano = 10
    }

  }




}
