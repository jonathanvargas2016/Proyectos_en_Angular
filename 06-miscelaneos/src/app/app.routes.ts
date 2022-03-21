

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

//rutas hijas -> children
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children:USUARIO_ROUTES

    /*2 forma
    children:[
      rutas hijas
    ]

    */
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const ROUTES = RouterModule.forRoot(app_routes);
