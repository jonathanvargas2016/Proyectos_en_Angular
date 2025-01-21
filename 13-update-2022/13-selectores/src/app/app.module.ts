import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [provideHttpClient()],

  bootstrap: [AppComponent]
})
export class AppModule { }
