
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string,bandera:boolean): string {

    if(bandera == true){

      return value

    }else{

      let letra = value.split("")

      for(let i in letra){

         letra[i] = letra[i][0].replace(/^[A-Za-z0-9\s]+$/g, "*") + letra[i].substr(1)
      }

      value = letra.join("")
    }
    return value
  }
}
