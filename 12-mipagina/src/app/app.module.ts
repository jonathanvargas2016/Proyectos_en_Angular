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

// rutas
import {AppRoutingModule} from './app.routes'

// firebase
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from "../environments/environment";

// forms
import {FormsModule} from "@angular/forms";

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
