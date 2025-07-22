import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '@mappers/gifs.mapper';
import { Gif } from '@interfaces/gif.interface';


const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);

  return gifs
}


@Injectable({
  providedIn: 'root'
})
export class GifService {

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  private readonly _envs = environment
  private readonly _http = inject(HttpClient)

  constructor() {
    this.loadTrendingGifs();
    console.log('init service');
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  })

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

  searchGifs(query: string): Observable<Gif[]> {
    return this._http.get<GiphyResponse>(`${this._envs.urlGif}/search`, {
      params: {
        api_key: this._envs.apiKey,
        q: query,
        limit: 20
      }
    }).pipe(
      map(res => GifMapper.mapGiphyItemsToGifArray(res.data)),
      tap((res) => this.searchHistory.update((history) => ({
        ...history,
        [query.toLowerCase()]: res
      })))
    );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? []
  }


}
