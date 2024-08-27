import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaOneComponent } from './grafica-one/grafica-one.component';
import { MainComponent } from './main.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    DashboardComponent,
    GraficaOneComponent,
    ProgressComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
    GraficaOneComponent,
    ProgressComponent,
    MainComponent
  ]
})
export class PagesModule { }
