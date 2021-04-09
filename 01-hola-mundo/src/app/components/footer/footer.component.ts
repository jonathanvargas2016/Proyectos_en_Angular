import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio:number;

  constructor(){
    //que el anio se actualice automaticamente.
    this.anio = new Date().getFullYear();
  }
}
