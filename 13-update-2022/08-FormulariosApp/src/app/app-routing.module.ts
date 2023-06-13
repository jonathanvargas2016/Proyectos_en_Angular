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
  { path: '**', redirectTo: 'reactive' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
