import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private http!: HttpClient;
  constructor(private injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
