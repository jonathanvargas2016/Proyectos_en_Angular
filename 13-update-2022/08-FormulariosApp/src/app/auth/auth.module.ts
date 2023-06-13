import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [RegistroComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthModule {}
