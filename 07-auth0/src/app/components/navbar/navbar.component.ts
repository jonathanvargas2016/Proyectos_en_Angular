import {Component, Inject, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  loginWithRedirect(): void{
    this.auth.loginWithRedirect();
  }
  logout(): void{
    this.auth.logout();
  }



}
