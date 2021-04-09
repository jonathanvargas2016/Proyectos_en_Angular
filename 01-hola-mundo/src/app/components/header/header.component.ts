//para decir q es un componente necesito asignarle el decorador

import {Component} from '@angular/core'

@Component({
  //definir como angular cargara este componente
  selector: 'app-header',
  //template: `<h1> Hc</h1> `

  templateUrl: './header.component.html'

})
//para usar este componente a lo largo del proyecto se lo debe importar en module.ts
export class HeaderComponent{



}
