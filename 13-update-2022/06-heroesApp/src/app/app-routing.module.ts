import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent,
  },
  { path: '', redirectTo: '404', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('@modules/heroes/heroes.module').then((m) => m.HeroesModule),
  },
];
