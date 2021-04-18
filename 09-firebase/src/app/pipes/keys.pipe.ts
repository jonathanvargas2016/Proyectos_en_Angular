import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure:false /*tiene q estar pendiente del ciclo de cambios que haga angular*/
})
export class KeysPipe implements PipeTransform {

  transform(heroes: any): any {
    let ArregloKeys = []

    //PIPE PARA TRANFORMAR UN OBJETO A UN ARREGLO CON SUS RESPECTIVAS LLAVES
    //heroes es el objeto que viene de firebase
    for(let key in heroes){
      ArregloKeys.push(key)
    }
    //imprime arreglo de cada llave de cada objeto
    console.log(ArregloKeys)

    return ArregloKeys;
  }

}
