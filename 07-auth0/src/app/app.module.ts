import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

//routes
import { ROUTES } from './app.routes';

//services
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    AuthModule.forRoot({
      domain: 'dev-fl18bc2b.eu.auth0.com',
      clientId: 'lB3sPbLQ6T7TuJpQx8T7F47LCGe2rKGb',
      cacheLocation: "localstorage",
      useRefreshTokens:true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
