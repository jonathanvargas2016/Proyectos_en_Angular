import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BookService } from '../../services/book.service';
import { bookReducer } from '../../store/book.reducer';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockBookService = {
    getCountItemsCart: jest.fn()
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: BookService,
          useValue: mockBookService
        }
      ],
      imports: [
        StoreModule.forRoot(
          {
            count: bookReducer,
          }
        ),
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCountItemsCart method when fn[ngOnInit] is executed', () => {
    const spyBookService = jest.spyOn(mockBookService, 'getCountItemsCart');
    component.ngOnInit();
    expect(spyBookService).toHaveBeenCalled();
  })

});
