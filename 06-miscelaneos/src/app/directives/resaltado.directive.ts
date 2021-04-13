//cuando un elemento tenga esta directiva quiero q se resalte

import { Directive } from '@angular/core';

//importamos
import {ElementRef,HostListener,Input} from '@angular/core';

//HostListener. para escuchar mouse.

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

//variable viene de afuera
  @Input("appResaltado")  nuevoColor

  constructor(private el:ElementRef) {
    //el. es todo el objeto
    //voy a modificar el stilo
    //el.nativeElement.style.backgroundColor = 'yellow'

  }
  //metodo para cambiar el background cuando el puntero este sobre
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor)
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null)
  }

  private resaltar(color = "yellow"){
    this.el.nativeElement.style.backgroundColor = color
  }
}
