import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, VentasModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
