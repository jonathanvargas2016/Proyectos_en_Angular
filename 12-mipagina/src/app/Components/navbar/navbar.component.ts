import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from "../../Servicios/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  constructor(private router: Router,
              public authService: AuthService) {
  }

  ngOnInit(){
  }

  redirigirALogin(){
    return this.router.navigate(['/login'])
  }

  async logout(){
    await this.authService.logout();
    await this.router.navigate(['/login'])
  }
  redirigirAAdministracion(){
    return this.router.navigate(['/administracion'])
  }

}
