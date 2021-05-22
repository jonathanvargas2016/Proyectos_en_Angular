import { Component, OnInit } from '@angular/core';

//servicio
import { PeliculasService } from 'src/app/services/peliculas.service';

//RUTAS
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string = ""

  constructor(public _ps:PeliculasService, private route:ActivatedRoute) {

    this.route.params.subscribe(parametros=>{

      if(parametros['id']){
        this.termino = parametros['id']
        this.buscar()
      }

    })
  }

  buscar(){
    if(this.termino.length === 0){
      return

    }else{
      this._ps.searchMovie(this.termino).subscribe(data =>{
      })
    }
  }


    ngOnInit(): void {
    }

}
