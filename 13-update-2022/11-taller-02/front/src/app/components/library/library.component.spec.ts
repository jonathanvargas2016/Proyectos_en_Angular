import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookService } from '../../services/book.service';
import { LibraryComponent } from './library.component';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let mockBookService = {
    getBooks: jest.fn()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryComponent],
      providers: [
        {
          provide: BookService,
          useValue: mockBookService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBooks method when fn[ngOnInit] is executed', () => {

    const spyBookService = jest.spyOn(mockBookService, 'getBooks');
    component.ngOnInit();
    expect(spyBookService).toHaveBeenCalled();

  })
});
