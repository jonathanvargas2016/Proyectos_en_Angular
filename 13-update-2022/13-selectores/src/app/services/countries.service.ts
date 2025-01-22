import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _regions: Region[] = [Region.Africa, Region.Europe, Region.Americas, Region.Asia, Region.Oceania];
  private _urlBase: string = "https://restcountries.com/v3.1"
  constructor(private _http: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getContries(region: Region): Observable<SmallCountry[]> {
    return this._http.get<Country[]>(`${this._urlBase}/region/${region}?fields=cca3,name,borders`).pipe(map((countries) => countries.map((item) => (
      {
        name: item.name.common,
        cca3: item.cca3,
        borders: item.borders ?? []
      }
    ))))
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    return this._http.get<Country>(`${this._urlBase}/alpha/${alphaCode}?fields=cca3,name,borders`)
      .pipe(
        map((item) => (
          {
            name: item.name.common,
            cca3: item.cca3,
            borders: item.borders ?? []
          }
        )))
  }

  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    const countriesReq: Observable<SmallCountry>[] = []
    borders.forEach((code) => {
      const req = this.getCountryByAlphaCode(code)
      countriesReq.push(req)
    })

    return combineLatest(countriesReq)
  }
}
