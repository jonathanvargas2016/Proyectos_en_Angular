import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

//rutas
import {Router} from '@angular/router';

//servicio
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  termino:string=""
  constructor(public _ps:PeliculasService, private router:Router) { }

  ngOnInit(): void {
  }

  buscar(){

    if(this.termino.length === 0){
      return
    }else{
      this.router.navigate(['search',this.termino])
      this.termino = ""
    }
  }

}
