import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '@modules/heroes/models/heroe.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (heroe.id) {
      return `assets/heroes/${heroe.id}.jpg`;
    } else if (heroe.altImg) {
      return heroe.altImg;
    } else {
      return 'assets/no-image.png';
    }
  }
}
