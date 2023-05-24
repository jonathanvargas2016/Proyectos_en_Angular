import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicos',
        component: BasicosComponent,
      },
      {
        path: 'dinamicos',
        component: DinamicosComponent,
      },
      {
        path: 'switches',
        component: SwitchesComponent,
      },
      { path: '**', redirectTo: 'basicos' },
    ],
  },
];

@NgModule({
  declarations: [BasicosComponent, DinamicosComponent, SwitchesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class TemplateModule {}
