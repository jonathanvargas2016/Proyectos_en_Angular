
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetaPeliculaComponent } from './components/tarjeta-pelicula/tarjeta-pelicula.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'pelicula/:id/:pag', component: TarjetaPeliculaComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: TarjetaPeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const RUTAS = RouterModule.forRoot(app_routes);
