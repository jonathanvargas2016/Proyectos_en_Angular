import { Component, OnInit } from '@angular/core';

//importamos para extraer datos del link
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.parent.params.subscribe(params=>{
      console.log(params)
    })
   }

  ngOnInit(): void {
  }

}
