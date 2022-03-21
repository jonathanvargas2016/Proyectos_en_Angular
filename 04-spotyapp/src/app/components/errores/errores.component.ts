import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html'
})
export class ErroresComponent{

  @Input() mensajeError:string

  constructor() {
    console.log(this.mensajeError)
  }


}
