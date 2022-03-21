import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styles: []
})
export class CarteleraComponent implements OnInit {

//la variable que viene es cartelera
  @Input('cartelera') peliculas:any



  constructor() { }

  ngOnInit(): void {
  }

}
