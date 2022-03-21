import { Component, OnInit } from '@angular/core';

//extraer datos de link
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) {

    //extraer dato de ruta padre
    this.router.parent.params.subscribe(params=>{
      console.log(params)
    })
   }

  ngOnInit(): void {
  }

}
