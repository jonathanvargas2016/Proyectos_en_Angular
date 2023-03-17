import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';

// Cambiar el locale de la app.
import localEs from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

// Mandar a llamar la funcion
registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, VentasModule, AppRouterModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-HN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
