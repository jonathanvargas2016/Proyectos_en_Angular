import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Heroe } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';
import { Observable } from 'rxjs';

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
