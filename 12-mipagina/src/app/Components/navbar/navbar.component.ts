import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from "../../Servicios/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) { }

  async ngOnInit(){
    const user = await this.authService.getUsuarioActual()
    if(user){
    }
  }

  redirigirALogin(): void{
    this.router.navigate(['/login'])
  }

  async logout(){
    try {
      await this.authService.logout();
      this.router.navigate(['/login'])

    }catch (e) {

    }
  }

}
