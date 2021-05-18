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

// rutas
import {AppRoutingModule} from './app.routes'
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
    ReferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
