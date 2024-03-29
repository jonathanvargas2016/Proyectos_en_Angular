import { Component, OnInit } from '@angular/core';
import { Heroe } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css'],
})
export class ListadoHeroesComponent implements OnInit {
  heroeList$!: Observable<Heroe[]>;

  constructor(private heroeService: HeroesService) {
    this.heroeList$ = this.heroeService.getHeroes();
  }

  ngOnInit(): void {}
}
