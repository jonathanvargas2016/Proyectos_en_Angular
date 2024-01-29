import { TestBed } from '@angular/core/testing';

import { CheckCartGuard } from './check-cart.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { bookReducer } from '../store/book.reducer';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectCheckCartItems } from '../store/book.selectors';

describe('CheckCartGuard', () => {
  let guard: CheckCartGuard;
  let router: Router
  let store: MockStore;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), StoreModule.forRoot(
        {
          count: bookReducer,
        }
      ),],
      providers: [CheckCartGuard, provideMockStore({})
      ]
    });
    guard = TestBed.inject(CheckCartGuard);
    router = TestBed.inject(Router);
    router.initialNavigation();
    store = TestBed.inject(MockStore);

  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
