import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './alone/menu/menu.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'signal',
    loadChildren: () =>
      import('./signals/signals.module').then((m) => m.SignalsModule),
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), MenuComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
