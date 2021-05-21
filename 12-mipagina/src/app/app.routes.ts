import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {YoComponent} from "./Components/yo/yo.component";
import {EducacionComponent} from "./Components/educacion/educacion.component";
import {ExperienciaComponent} from "./Components/experiencia/experiencia.component";
import {CertificacionesComponent} from "./Components/certificaciones/certificaciones.component";
import {ProyectosComponent} from "./Components/proyectos/proyectos.component";
import {ReferenciasComponent} from "./Components/referencias/referencias.component";
import {LoginComponent} from "./Components/login/login.component";

const rutas: Routes = [
  { path: 'yo', component: YoComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia-laboral', component: ExperienciaComponent },
  { path: 'cursos-certificaciones', component: CertificacionesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'yo' },
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule{}










