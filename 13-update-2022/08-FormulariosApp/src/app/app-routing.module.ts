import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.module').then((r) => r.ReactiveModule),
  },
  {
    path: 'template',
    loadChildren: () =>
      import('./template/template.module').then((r) => r.TemplateModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((r) => r.AuthModule),
  },

  {
    path: 'selectors',
    loadChildren: () =>
      import('./paises/paises.module').then((r) => r.PaisesModule),
  },

  { path: '**', redirectTo: 'template' },
  { path: '', redirectTo: 'template', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
