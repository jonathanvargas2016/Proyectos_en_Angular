
import { Pipe, PipeTransform } from '@angular/core';

//importar paquete para videos de YOUTUBE
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomSeguro implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }

  transform(value: string, url:string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value) ;
  }
}
