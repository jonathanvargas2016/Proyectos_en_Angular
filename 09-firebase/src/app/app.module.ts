import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

//rutas
import { RUTAS } from './app.routes';

//pipes
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    /*ReactiveFormsModule,*/
    RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
