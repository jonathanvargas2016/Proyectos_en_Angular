
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string,todo:boolean): string {

    value = value.toLowerCase()

    let nombres = value.split(" ")

    if(todo == true){
      for(let i in nombres){
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1)
      }

    }else{

        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1)
    }
    return nombres.join(" ");
  }
}
