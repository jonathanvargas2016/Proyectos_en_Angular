import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/grid-list/gif-list.component';
import { GifService } from '@services/gif.service';
import { Gif } from '@interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export default class SearchPageComponent {
  imageUrls = signal<Gif[]>([]);

  private readonly _gifService = inject(GifService);

  onSearch(query: string) {
    console.log('Search query:', query);
    if (query.trim().length === 0) return
    this._gifService.searchGifs(query).subscribe({
      next: (gifs) => {
        this.imageUrls.set(gifs);
      },
      error: (err) => {
        console.error('Error fetching search results:', err);
      }
    });
  }

}
