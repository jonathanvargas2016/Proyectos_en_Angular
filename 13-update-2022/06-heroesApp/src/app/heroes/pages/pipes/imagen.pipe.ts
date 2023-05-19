import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '@modules/heroes/models/heroe.interface';

@Pipe({
  name: 'imagen',
  //pure: false para que detecte cada que hay cambios en los valores del objeto
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (heroe?.altImg) {
      return heroe.altImg;
    } else if (heroe?.id) {
      return `assets/heroes/${heroe.id}.jpg`;
    } else {
      return 'assets/no-image.png';
    }
  }
}
