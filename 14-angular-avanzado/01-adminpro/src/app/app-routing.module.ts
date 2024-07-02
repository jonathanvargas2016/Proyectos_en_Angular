import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficaOneComponent } from './pages/grafica-one/grafica-one.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { MainComponent } from './pages/main.component';

const routes: Routes = [

  {
    path: "", component: MainComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "progress",
        component: ProgressComponent
      },
      {
        path: "graph-one",
        component: GraficaOneComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },

  {//path no definido
    path: "**",
    component: NoPageFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
