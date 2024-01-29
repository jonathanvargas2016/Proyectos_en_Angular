import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from '../../services/book.service';
import { bookReducer } from '../../store/book.reducer';
import { DetailsBookComponent } from './details-book.component';

describe('DetailsBookComponent', () => {
  let component: DetailsBookComponent;
  let fixture: ComponentFixture<DetailsBookComponent>;
  let mockBookService = {
    getItemsCart: jest.fn(),
    addBookToCart: jest.fn()
  }
  let mockMessageService = {
    add: jest.fn()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsBookComponent],
      imports: [
        StoreModule.forRoot(
          {
            count: bookReducer,
          }
        ),
      ],
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addItem and addBookToCart method when fn[addItem] is executed', () => {

    const mockDataRes: Book = {
      "id": 3,
      "title": "Reactive Patterns with RxJS for Angular",
      description: "test",
      "category": "Web Development",
      "thumbnail": "https://content.packt.com/B17797/cover_image_small.jpeg",
      "author": "Lamis Chebbi",
      "price": 54.99,
      "createdAt": "2024-01-23T23:55:50.996Z",
      "updatedAt": "2024-01-29T00:00:39.251Z",
      amount: 0
    }

    const mockBook: Book = {
      "id": 5,
      "title": "Mastering Go - Third Edition",
      description: "test",
      "category": "Programming",
      "thumbnail": "https://content.packt.com/B17194/cover_image_small.jpeg",
      "author": "Mihalis Tsoukalos",
      "price": 57.99,
      "createdAt": "2024-01-23T23:55:50.996Z",
      "updatedAt": "2024-01-29T03:48:56.012Z",
      amount: 0
    }

    const spyBookServiceGet = jest.spyOn(mockBookService, 'getItemsCart').mockImplementation(() => of([mockDataRes]))
    const spyBookServiceAdd = jest.spyOn(mockBookService, 'addBookToCart').mockImplementation(() => of({ message: "item added" }))
    const spyMessageService = jest.spyOn(mockMessageService, 'add')
    component.addItem(mockBook)
    expect(spyBookServiceGet).toHaveBeenCalled();
    expect(spyBookServiceAdd).toHaveBeenCalled();
    expect(spyMessageService).toHaveBeenCalled();

  })

});
