import { Component, OnInit } from '@angular/core';

//importar la libreria para extraer info del routerLink
import {ActivatedRoute} from '@angular/router';

import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-only-heroe',
  templateUrl: './only-heroe.component.html',
})
export class OnlyHeroeComponent {

  heroes:any[]=[]
  buscador:string=""


  constructor(private activatedRoute:ActivatedRoute, _heroesService:HeroesService) {

    this.activatedRoute.params.subscribe(params =>{
      this.buscador = params.termino
      this.heroes = _heroesService.buscarHeroes(params.termino)
      console.log(this.heroes)
    }

    )

  }


}
