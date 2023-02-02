import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey    : string = 'jJeomsdwrOxDDkoD3YGuibtI2zlQFNZB'
  private urlBase   : string = `https://api.giphy.com/v1/gifs`
  private _historial: string[] = [];
  public resultados : Gif[] = [];

  constructor(private readonly http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }

    this._historial = this._historial.splice(0, 10);
    this.saveToLocalStorage('historial', this._historial);
    this.getGifsByQuery(query);
  }

  getGifsByQuery(query: string) {

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http.get<SearchGifsResponse>(`${this.urlBase}/search`, {params}).subscribe((res: SearchGifsResponse) => {
      console.log(res);
      this.resultados = res.data;
      this.saveToLocalStorage('resultados', this.resultados);
    })
  }

  saveToLocalStorage(name: string, data: string[] | Gif[]) {
    localStorage.setItem(name, JSON.stringify(data));
  }


}
