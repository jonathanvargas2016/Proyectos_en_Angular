import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {YoComponent} from "./Components/yo/yo.component";
import {EducacionComponent} from "./Components/educacion/educacion.component";
import {ExperienciaComponent} from "./Components/experiencia/experiencia.component";
import {CertificacionesComponent} from "./Components/certificaciones/certificaciones.component";
import {ProyectosComponent} from "./Components/proyectos/proyectos.component";
import {LoginComponent} from "./Components/login/login.component";
import {AdministracionComponent} from "./Components/administracion/administracion.component";
import {AuthGuard} from "./Guard/auth.guard";
import {LoginGuard} from "./Guard/login.guard";

const rutas: Routes = [
  { path: 'yo', component: YoComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia-laboral', component: ExperienciaComponent },
  { path: 'cursos-certificaciones', component: CertificacionesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  {path: 'administracion', component: AdministracionComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'yo' },
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule{}










