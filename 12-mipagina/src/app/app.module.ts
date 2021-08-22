import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { YoComponent } from './Components/yo/yo.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { CertificacionesComponent } from './Components/certificaciones/certificaciones.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ReferenciasComponent } from './Components/referencias/referencias.component';
import { AdministracionComponent } from './Components/administracion/administracion.component';
import { LoginComponent } from './Components/login/login.component';
import {EducacionFormComponent} from "./Components/administracion/informacion/educacion/educacion.component";

// rutas
import {AppRoutingModule} from './app.routes'

// firebase
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from "../environments/environment";
import { PERSISTENCE } from '@angular/fire/auth';

// firestorage
import {AngularFireStorageModule} from "@angular/fire/storage";

// forms
import {FormsModule} from "@angular/forms";
import { ExperienciaLaboralComponent } from './Components/administracion/informacion/experiencia-laboral/experiencia-laboral.component';
import { InformacionPersonalComponent } from './Components/administracion/informacion/informacion-personal/informacion-personal.component';
import { InformacionContactoComponent } from './Components/administracion/informacion/informacion-contacto/informacion-contacto.component';
import { HabilidadesComponent } from './Components/administracion/informacion/habilidades/habilidades.component';
import { CertificacionesFormComponent } from './Components/administracion/informacion/certificaciones-form/certificaciones-form.component';
import { ProyectosFormsComponent } from './Components/administracion/informacion/proyectos-forms/proyectos-forms.component';

// pipes
import { DomSeguroPipe } from './Pipes/dom-seguro.pipe';
import { AlertasComponent } from './Components/alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    YoComponent,
    EducacionComponent,
    ExperienciaComponent,
    CertificacionesComponent,
    ProyectosComponent,
    ReferenciasComponent,
    AdministracionComponent,
    LoginComponent,
    ExperienciaLaboralComponent,
    InformacionPersonalComponent,
    InformacionContactoComponent,
    HabilidadesComponent,
    EducacionFormComponent,
    CertificacionesFormComponent,
    ProyectosFormsComponent,
    DomSeguroPipe,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
      {provide: PERSISTENCE, useValue: 'local'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
