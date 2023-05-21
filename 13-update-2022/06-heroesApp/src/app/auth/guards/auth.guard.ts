import { Injectable, Injector } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  private router!: Router;
  constructor(private authService: AuthService, private injector: Injector) {
    this.router = injector.get(Router);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.verifyAuth().pipe(
      tap((state) => {
        if (!state) {
          this.router.navigate(['./auth']);
        }
      })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.verifyAuth().pipe(
      tap((state) => {
        if (!state) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  //* canLoad: sirve para prevenir que el usuario cargue el modulo. Si usamos lazyload es necesario usar canLoad
}
