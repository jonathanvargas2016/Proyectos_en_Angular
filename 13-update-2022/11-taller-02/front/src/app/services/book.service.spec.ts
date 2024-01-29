
import { Book } from '../interfaces/book.interface';
import { BookService } from './book.service';
import Mocked = jest.Mocked;

describe('BookService', () => {
  let bookService: BookService;
  let httpServiceMock: Mocked<any>

  beforeEach(() => {
    httpServiceMock = {
      post: jest.fn(),
      get: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    }

    bookService = new BookService(httpServiceMock)
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it('should call get method when fn[getBooks] is executed', () => {
    const spyHttpServiceMock = jest.spyOn(httpServiceMock, 'get').mockResolvedValue(true);
    bookService.getBooks();
    expect(spyHttpServiceMock).toHaveBeenCalled();
  })

  it('should call get method when fn[getItemsCart] is executed', () => {
    const spyHttpServiceMock = jest.spyOn(httpServiceMock, 'get').mockResolvedValue(true);
    bookService.getItemsCart();
    expect(spyHttpServiceMock).toHaveBeenCalled();
  })

  it('should call delete method when fn[deleteItemCart] is executed', () => {
    const spyHttpServiceMock = jest.spyOn(httpServiceMock, 'delete').mockResolvedValue(true);
    bookService.deleteItemCart(1);
    expect(spyHttpServiceMock).toHaveBeenCalled();
  })


  it('should call post method when fn[addBookToCart] is executed', () => {
    const mockBook: Book = {
      id: 1,
      title: 'test',
      thumbnail: 'test',
      price: 10,
      amount: 10
    }
    const spyHttpServiceMock = jest.spyOn(httpServiceMock, 'post').mockResolvedValue(true);
    bookService.addBookToCart(mockBook);
    expect(spyHttpServiceMock).toHaveBeenCalled();
  })

  it('should call get method when fn[getCountItemsCart] is executed', () => {
    const spyHttpServiceMock = jest.spyOn(httpServiceMock, 'get').mockResolvedValue(true);
    bookService.getCountItemsCart();
    expect(spyHttpServiceMock).toHaveBeenCalled();
  })

});
