import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

const app_routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },/*heroe recibe id*/
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const RUTAS = RouterModule.forRoot(app_routes);
