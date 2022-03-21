import { Component, OnInit } from '@angular/core';

//para enviar parametros
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

//funcion para enviar un dato a otro componente
  buscarHeroe(termino:string){
    console.log(termino)
    this.router.navigate(['/onlyHeroe',termino])
  }

}
