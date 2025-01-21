import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getContries(region: Region): Observable<SmallCountry> {
    return this._http.get<SmallCountry>(`${this._urlBase}/region/${region}?fields=cca3,name,borders`)
  }
}
