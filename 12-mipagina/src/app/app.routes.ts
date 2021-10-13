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
import {MediosComponent} from "./Components/administracion/medios/medios.component";
import {UpdateInfoPersonalComponent} from "./Components/administracion/informacion/informacion-personal/update-info-personal/update-info-personal.component";

const rutas: Routes = [
  { path: 'yo', component: YoComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia-laboral', component: ExperienciaComponent },
  { path: 'cursos-certificaciones', component: CertificacionesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'administracion/informacion-contacto', component: InformacionContactoFormComponent, canActivate: [AuthGuard]},
  { path: 'administracion/habilidades', component: HabilidadesFormComponent, canActivate: [AuthGuard]},
  { path: 'administracion/experiencia-laboral', component: ExperienciaLaboralFormComponent, canActivate: [AuthGuard]},
  { path: 'administracion/educacion', component: EducacionFormComponent, canActivate: [AuthGuard]},
  { path: 'administracion/cursos-certificaciones', component: CertificacionesFormComponent, canActivate: [AuthGuard]},
  { path: 'administracion/proyectos', component: ProyectosFormsComponent, canActivate: [AuthGuard]},
  { path: 'administracion/medios', component: MediosComponent, canActivate: [AuthGuard]},
  { path: 'administracion/informacion-personal', component: CardInfoPerComponent, canActivate: [AuthGuard]},
  { path: 'administracion/informacion-personal/:id', component: UpdateInfoPersonalComponent, canActivate: [AuthGuard]},

  { path: '**', pathMatch: 'full', redirectTo: 'yo' },
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule{}










