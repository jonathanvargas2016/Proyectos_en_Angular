import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

//rutas.
import { RUTAS } from './app.routes';

//ngModel
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//jsonp
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

//pipes
import { NoImage } from './pipes/noimage.pipe';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { TarjetaPeliculaComponent } from './components/tarjeta-pelicula/tarjeta-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PeliculaComponent,
    NoImage,
    CarteleraComponent,
    TarjetaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
