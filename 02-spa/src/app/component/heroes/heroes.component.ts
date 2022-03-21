import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  heroes:any[] = []

  constructor(private _heroesService:HeroesService,private router:Router) {
    this.heroes = this._heroesService.getHeroes()
  }

  ngOnInit(): void {
  }

  verHeroe(i:number){
    this.router.navigate(['/heroe',i])

  }

}
