import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ListClientComponent } from './list-client/list-client.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListClientComponent,
  },
  {
    path: 'edit',
    component: EditClientComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ListClientComponent, EditClientComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule {}
