import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {


  transform(fotoPerfil: string): string {
    if(fotoPerfil){
      return fotoPerfil
    }else{
      return "./assets/img/noimage.jpg";
    }

  }

}
