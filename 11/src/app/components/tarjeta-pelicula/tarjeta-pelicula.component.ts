import { Component, OnInit } from '@angular/core';

//extraer id de pelicula del link
import {ActivatedRoute} from '@angular/router';

//servicio
import { PeliculasService } from 'src/app/services/peliculas.service';




@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: []
})
export class TarjetaPeliculaComponent implements OnInit {

  pelicula:any={
  }
  generos:any[]
  retornarA:string
  busqueda:string

  constructor(private activatedRoute:ActivatedRoute, public _ps:PeliculasService) {


    this.activatedRoute.params.subscribe(parametros=>{
      this._ps.getMovie(parametros['id']).subscribe(data =>{


        if(parametros['busqueda']){
          this.busqueda = parametros['busqueda']
        }

        this.pelicula = data

        this.generos = this.pelicula['genres']

        for(let i=0;i<this.generos.length;i++){
          this.generos[i] = this.generos[i].name
        }
        console.log("pelicula ",this.pelicula)
        this.retornarA = parametros['pag']
      })
    })


  }



  ngOnInit(): void {
  }

}
