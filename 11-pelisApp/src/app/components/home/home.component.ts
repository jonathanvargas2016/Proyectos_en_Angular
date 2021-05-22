import { Component, OnInit } from '@angular/core';

//servicio
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //cartelera :any

  populares:any
  now_playing:any
  upcoming:any

  constructor(public _ps:PeliculasService) {

    this.getNowPlaying()
    this.getPopulares()
    this.getUpcoming()
  }

//metodo para extraer peliculas entre dos fechas
/*  getCartelera(){
    this._ps.getCartelera().subscribe(data =>{
      this.cartelera = data
      console.log(this.cartelera)
    })
  }*/

  getPopulares(){
    this._ps.getPopulares().subscribe(data =>{
      this.populares = data
      console.log(this.populares)
    })
  }

  getNowPlaying(){
    this._ps.getNowPlaying().subscribe(data =>{
      this.now_playing = data
      //console.log(this.now_playing)
    })
  }

  getUpcoming(){
    this._ps.getUpcoming().subscribe(data =>{
      this.upcoming = data
      //console.log(this.upcoming)
    })
  }

  ngOnInit(): void {
  }

}
