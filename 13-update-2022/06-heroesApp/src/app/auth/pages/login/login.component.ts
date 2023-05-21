import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { tap, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../interfaces/user.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  private user!: User | undefined;
  private router!: Router;

  constructor(private injector: Injector, private authService: AuthService) {
    this.router = injector.get(Router);
  }

  ngOnInit(): void {}

  login() {
    this.loading = true;
    this.authService.login().subscribe({
      next: (user) => {
        this.loading = false;
        this.user = user;
        this.router.navigate(['/heroes']);
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
