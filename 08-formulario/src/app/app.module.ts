import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importar formulario cuando se trabaja por data
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { Data2Component } from './components/data/data2.components';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    Data2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
