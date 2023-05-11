import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Heroe } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroeResolver implements Resolve<Heroe> {
  constructor(private heroesService: HeroesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Heroe> {
    const { id } = route.params;
    return this.heroesService.getHeroeById(id);
  }
}
