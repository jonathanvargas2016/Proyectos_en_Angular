import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Cambiar el locale de la app.
import localEs from '@angular/common/locales/es-HN';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

// Mandar a llamar la funcion
registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    VentasModule,
    AppRouterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' },
    // { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
