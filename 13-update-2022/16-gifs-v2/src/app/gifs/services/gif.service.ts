import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '@mappers/gifs.mapper';
import { Gif } from '@interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  private readonly _envs = environment
  private readonly _http = inject(HttpClient)

  constructor() {
    this.loadTrendingGifs();
    console.log('init service');
  }

  loadTrendingGifs() {
    this._http.get<GiphyResponse>(`${this._envs.urlGif}/trending`, {
      params: {
        api_key: this._envs.apiKey,
        limit: 20
      }
    }).subscribe({
      next: (res) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);

      },

    })
  }


}
