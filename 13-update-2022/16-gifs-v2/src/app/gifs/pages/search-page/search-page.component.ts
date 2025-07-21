import { Component } from '@angular/core';
import { GifListComponent } from '../../components/grid-list/gif-list.component';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export default class SearchPageComponent {

  onSearch(query: string) {
    console.log('Search query:', query);
    // Implement search logic here, possibly using a service to fetch results based on the query
  }

}
