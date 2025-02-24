import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './signals-layout/signals-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SignalsModule {}
