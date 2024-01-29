import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartComponent } from './checkout-cart.component';
import { BookService } from '../../services/book.service';
import { MessageService } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../../store/book.reducer';
import { totalPurchaseReductor } from '../../store/purchase.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CheckoutCartComponent', () => {
  let component: CheckoutCartComponent;
  let fixture: ComponentFixture<CheckoutCartComponent>;
  let mockBookService = {
    getItemsCart: jest.fn(),
    deleteItemCart: jest.fn(),
  }
  let mockMessageService = {
    add: jest.fn()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutCartComponent],
      providers: [
        {
          provide: BookService,
          useValue: mockBookService
        },
        {
          provide: MessageService,
          useValue: mockMessageService
        }
      ],
      imports: [
        StoreModule.forRoot(
          {
            count: bookReducer,
            purchase: totalPurchaseReductor
          }
        ),
        FormsModule,
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
