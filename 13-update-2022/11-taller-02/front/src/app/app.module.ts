import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { LibraryComponent } from './components/library/library.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryCartComponent } from './components/summary-cart/summary-cart.component';
import { CheckCartGuard } from './guards/check-cart.guard';
import { BookService } from './services/book.service';
import { bookReducer } from './store/book.reducer';
import { totalPurchaseReductor } from './store/purchase.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsBookComponent,
    LibraryComponent,
    CheckoutCartComponent,
    SummaryCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        count: bookReducer,
        purchase: totalPurchaseReductor
      }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ToastModule
  ],
  providers: [BookService, CheckCartGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
