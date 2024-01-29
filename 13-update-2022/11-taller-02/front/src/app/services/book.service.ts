import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book.interface';
import { ResMessage } from '../interfaces/res-message.interface';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books')
  }

  getItemsCart(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/cart')
  }

  deleteItemCart(id: number): Observable<ResMessage> {
    return this.http.delete<ResMessage>(`/api/cart/${id}`)
  }

  addBookToCart(book: Book): Observable<ResMessage> {
    return this.http.post<ResMessage>('/api/cart', { ...book })
  }

  getCountItemsCart(): Observable<number> {
    return this.http.get<number>('/api/cart/count')
  }


}
