import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.scss'
})
export class GifListItemComponent {

  imageUrl = input.required<string>()

}
