import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs';
import { selectCheckCartItems } from '../store/book.selectors';

@Injectable()
export class CheckCartGuard implements CanActivate {

  constructor(private router: Router, private store: Store<{ count: number }>) {

  }

  canActivate() {
    return this.store.pipe(
      select(selectCheckCartItems),
      tap((value) => {
        if (value) {
          return true
        } else {
          this.router.navigate(['/'])
          return false;
        }
      })
    )
  }

}
