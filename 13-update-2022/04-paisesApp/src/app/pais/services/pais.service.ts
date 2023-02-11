import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.urlBase}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.urlBase}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.urlBase}/alpha/${id}`;
    return this.http.get<Country>(url).pipe(map((res: any) => res[0]));
  }

}
