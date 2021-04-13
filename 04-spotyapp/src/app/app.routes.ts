import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artista/:id', component: ArtistaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const ROUTES = RouterModule.forRoot(app_routes,{useHash:true});
