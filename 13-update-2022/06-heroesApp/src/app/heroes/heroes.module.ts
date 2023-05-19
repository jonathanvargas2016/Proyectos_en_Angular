import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarHeroeComponent } from './pages/agregar-heroe/agregar-heroe.component';
import { BuscarHeroeComponent } from './pages/buscar-heroe/buscar-heroe.component';
import { VerHeroeComponent } from './pages/ver-heroe/ver-heroe.component';
import { HomeHeroeComponent } from './pages/home-heroe/home-heroe.component';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@modules/material/material.module';
import { HeroeTarjetaComponent } from './pages/components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pages/pipes/imagen.pipe';
import { HeroeResolver } from './pages/resolvers/heroe.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmarModalComponent } from './components/confirmar-modal/confirmar-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeHeroeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoHeroesComponent,
      },
      {
        path: 'agregar',
        component: AgregarHeroeComponent,
      },
      {
        path: 'buscar',
        component: BuscarHeroeComponent,
      },
      {
        path: ':id',
        component: VerHeroeComponent,
        resolve: {
          heroe: HeroeResolver,
        },
        data: { breadcrumb: 'Ver' },
      },
      {
        path: 'editar/:id',
        component: AgregarHeroeComponent,
        resolve: {
          heroe: HeroeResolver,
        },
        data: { breadcrumb: 'Editar' },
      },
      {
        path: '**',
        redirectTo: 'listado',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AgregarHeroeComponent,
    BuscarHeroeComponent,
    VerHeroeComponent,
    HomeHeroeComponent,
    ListadoHeroesComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroeResolver],
})
export class HeroesModule {}
