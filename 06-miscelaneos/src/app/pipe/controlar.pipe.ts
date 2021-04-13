import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlar'
})
export class ControlarPipe implements PipeTransform {

  transform(value: number): number {

    if(value > 30){
      return value = 30
    }
  
  }

}
