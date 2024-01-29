import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { CheckCartGuard } from './guards/check-cart.guard';

const routes: Routes = [
  {
    path: "",
    component: LibraryComponent,
  },
  {
    path: "checkout-cart",
    component: CheckoutCartComponent,
    canActivate: [CheckCartGuard]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: "**",
    component: LibraryComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
