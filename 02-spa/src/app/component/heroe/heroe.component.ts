import { Component } from '@angular/core';

//importamos la libreria para extraer info del link
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})

export class HeroeComponent {

  heroe:any={

  }

  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService) {
    //esto regresa un observador. algo q esta pendiente de esos cambios
      this.activatedRoute.params.subscribe(params => {
        this.heroe = _heroesService.getHeroe(params.id)
      })


   }



}
