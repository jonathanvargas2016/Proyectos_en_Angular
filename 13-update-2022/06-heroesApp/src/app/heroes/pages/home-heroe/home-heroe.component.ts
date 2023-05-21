import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-home-heroe',
  templateUrl: './home-heroe.component.html',
  styleUrls: ['./home-heroe.component.css'],
})
export class HomeHeroeComponent implements OnInit {
  private router!: Router;

  constructor(private injector: Injector, private authService: AuthService) {
    this.router = injector.get(Router);
  }

  ngOnInit(): void {}

  get auth() {
    return this.authService.auth;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }
}
