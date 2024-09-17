import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaOneComponent } from './grafica-one/grafica-one.component';
import { MainComponent } from './main.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GraficaOneComponent,
    ProgressComponent,
    MainComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  exports: [
    DashboardComponent,
    GraficaOneComponent,
    ProgressComponent,
    MainComponent,
    AccountSettingsComponent,
    PromesasComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
