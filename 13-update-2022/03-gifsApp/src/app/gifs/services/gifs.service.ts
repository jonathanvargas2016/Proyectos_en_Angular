import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'jJeomsdwrOxDDkoD3YGuibtI2zlQFNZB'
  private urlBase: string = `https://api.giphy.com/v1/gifs`
  private _historial: string[] = [];
  public resultados: any[] = [];

  constructor(private readonly http: HttpClient) { }


  get historial(): string[] {
    return [...this._historial];
  }


  buscarGifs(query: string = ''){   

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
    }

    this._historial = this._historial.splice(0, 10);
    // this.getGifsByQuery(query);

    this.http.get(`${this.urlBase}/search?api_key=${this.apiKey}&q=${query}&limit=10`).subscribe((res: any) => {
      console.log(res);
      this.resultados = res.data;
    })
  }

  getGifsByQuery(query: string): Observable<any>{
    return this.http.get(`${this.urlBase}/search?api_key=${this.apiKey}&q=${query}&limit=10`).pipe(map((res: any) => {
      console.log(res)
      return this.resultados = res.data;  
    }));
  }


}
