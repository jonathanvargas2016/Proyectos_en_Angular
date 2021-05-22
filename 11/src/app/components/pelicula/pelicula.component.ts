import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  @Input() peliculas:any[] = []
  @Input() termino:string

  constructor() {

  }

  ngOnInit(): void {
  }

}
