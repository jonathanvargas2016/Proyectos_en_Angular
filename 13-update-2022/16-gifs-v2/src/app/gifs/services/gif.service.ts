import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '@mappers/gifs.mapper';
import { Gif } from '@interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private readonly _envs = environment
  private readonly _http = inject(HttpClient)

  loadTrendingGifs(): Observable<Gif[]> {
    return this._http.get<GiphyResponse>(`${this._envs.urlGif}/trending`, {
      params: {
        api_key: this._envs.apiKey,
        limit: 20
      }
    }).pipe(map((res) => GifMapper.mapGiphyItemsToGifArray(res.data)))
  }


}
