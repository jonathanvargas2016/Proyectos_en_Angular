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
import {InformacionPersonalFormComponent} from "./Components/administracion/informacion/informacion-personal/informacion-personal-form.component";
import {InformacionContactoFormComponent} from "./Components/administracion/informacion/informacion-contacto/informacion-contacto-form.component";
import {HabilidadesFormComponent} from "./Components/administracion/informacion/habilidades/habilidades-form.component";
import {ExperienciaLaboralFormComponent} from "./Components/administracion/informacion/experiencia-laboral/experiencia-laboral-form.component";
import {EducacionFormComponent} from "./Components/administracion/informacion/educacion/educacion-form.component";
import {CertificacionesFormComponent} from "./Components/administracion/informacion/certificaciones-form/certificaciones-form.component";
import {ProyectosFormsComponent} from "./Components/administracion/informacion/proyectos-forms/proyectos-forms.component";
import {CardInfoPerComponent} from "./Components/administracion/informacion/informacion-personal/card/card-info-per.component";

const rutas: Routes = [
  { path: 'yo', component: YoComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia-laboral', component: ExperienciaComponent },
  { path: 'cursos-certificaciones', component: CertificacionesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  {
    path: 'administracion',
    component: AdministracionComponent,
    children: [
      {
        path: 'informacion-personal', component: CardInfoPerComponent,
      },
      {
        path: 'informacion-contacto', component: InformacionContactoFormComponent,
      },
      {
        path: 'habilidades', component: HabilidadesFormComponent,
      },
      {
        path: 'experiencia-laboral', component: ExperienciaLaboralFormComponent,
      },
      {
        path: 'educacion', component: EducacionFormComponent,
      },
      {
        path: 'cursos-certificaciones', component: CertificacionesFormComponent,
      },
      {
        path: 'proyectos', component: ProyectosFormsComponent,
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'administracion/informacion-personal/agregar',
    component: InformacionPersonalFormComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'yo' },
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule{}










