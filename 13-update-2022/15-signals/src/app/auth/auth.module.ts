import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharacterListComponent } from '../components/dragon-ball-page/character-list/character-list.component';
import { CharacterAddComponent } from '../components/dragon-ball-page/character-add/character-add.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, CharacterListComponent, CharacterAddComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule { }
