import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false /*tiene q estar pendiente del ciclo de cambios que haga angular*/
})
export class KeysPipe implements PipeTransform {

  transform(heroes: any): any {
    const ArregloKeys = [];

    // PIPE PARA TRANFORMAR UN OBJETO A UN ARREGLO CON SUS RESPECTIVAS LLAVES
    // heroes es el objeto que viene de firebase
    for (const key in heroes){
      ArregloKeys.push(key);
    }
    return ArregloKeys;
  }

}
