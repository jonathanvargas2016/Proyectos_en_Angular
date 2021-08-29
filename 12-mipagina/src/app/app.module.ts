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
import {EducacionFormComponent} from "./Components/administracion/informacion/educacion/educacion-form.component";
import { AlertasComponent } from './Components/alertas/alertas.component';

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
import { ExperienciaLaboralFormComponent } from './Components/administracion/informacion/experiencia-laboral/experiencia-laboral-form.component';
import { InformacionPersonalFormComponent } from './Components/administracion/informacion/informacion-personal/informacion-personal-form.component';
import { InformacionContactoFormComponent } from './Components/administracion/informacion/informacion-contacto/informacion-contacto-form.component';
import { HabilidadesFormComponent } from './Components/administracion/informacion/habilidades/habilidades-form.component';
import { CertificacionesFormComponent } from './Components/administracion/informacion/certificaciones-form/certificaciones-form.component';
import { ProyectosFormsComponent } from './Components/administracion/informacion/proyectos-forms/proyectos-forms.component';

// pipes
import { DomSeguroPipe } from './Pipes/dom-seguro.pipe';

// blockUI
import {BlockUIModule} from "ng-block-ui";

// primeNg
import {PrimeNgModule} from "./Components/administracion/prime-ng/prime-ng.module";
import { CardInfoPerComponent } from './Components/administracion/informacion/informacion-personal/card/card-info-per.component';
import { NoimagenPipe } from './Pipes/noimagen.pipe';

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
    ExperienciaLaboralFormComponent,
    InformacionPersonalFormComponent,
    InformacionContactoFormComponent,
    HabilidadesFormComponent,
    EducacionFormComponent,
    CertificacionesFormComponent,
    ProyectosFormsComponent,
    DomSeguroPipe,
    AlertasComponent,
    CardInfoPerComponent,
    NoimagenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BlockUIModule.forRoot(),
    PrimeNgModule
  ],
  providers: [
    {provide: PERSISTENCE, useValue: 'local'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
