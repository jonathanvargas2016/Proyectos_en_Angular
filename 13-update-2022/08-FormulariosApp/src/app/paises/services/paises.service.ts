import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountrySmall } from '../models/country.interface';

@Injectable()
export class PaisesService {
  private url: string = 'https://restcountries.com/v3.1/';
  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  private http!: HttpClient;
  constructor(private injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  get regiones(): string[] {
    return [...this._regiones];
  }

  getCountries(region: string): Observable<CountrySmall[]> {
    return this.http.get<CountrySmall[]>(
      `${this.url}region/${region}?fields=cca3,name`
    );
  }

  getBordersByCountry(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.url}alpha/${code}`);
  }
}
