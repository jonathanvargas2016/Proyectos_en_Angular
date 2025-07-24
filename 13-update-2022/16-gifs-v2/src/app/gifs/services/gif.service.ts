import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from '@interfaces/gif.interface';
import { GifMapper } from '@mappers/gifs.mapper';
import { map, Observable, tap } from 'rxjs';
import { GiphyResponse } from '../interfaces/giphy.interfaces';


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
  trendingGifsLoading = signal<boolean>(false);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));
  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  })

  private trendingPage = signal(0)
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

    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this._http.get<GiphyResponse>(`${this._envs.urlGif}/trending`, {
      params: {
        api_key: this._envs.apiKey,
        limit: 20,
        offset: this.trendingPage() * 20
      }
    }).subscribe({
      next: (res) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
        this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
        this.trendingGifsLoading.set(false);
        this.trendingPage.update(page => page + 1);
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
