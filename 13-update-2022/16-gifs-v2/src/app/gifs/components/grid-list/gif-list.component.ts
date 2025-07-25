import { Component, input } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { Gif } from '@interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.scss'
})
export class GifListComponent {

  gifs = input.required<Gif[]>()

}
