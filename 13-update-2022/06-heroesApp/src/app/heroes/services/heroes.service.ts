import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private http!: HttpClient;
  private baseUrl: string = 'http://localhost:3000';
  constructor(private injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(
      `${this.baseUrl}/heroes?q=${termino}&_limit=6`
    );
  }
}
