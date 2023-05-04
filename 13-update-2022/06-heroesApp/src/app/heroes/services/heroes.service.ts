import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HeroeInterface } from '../models/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private http!: HttpClient;
  constructor(private injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getHeroes(): Observable<HeroeInterface[]> {
    return this.http.get<HeroeInterface[]>('http://localhost:3000/heroes');
  }
}
