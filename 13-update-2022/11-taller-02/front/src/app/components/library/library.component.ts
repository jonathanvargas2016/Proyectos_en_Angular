import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {


  books!: Book[]

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks()?.subscribe({
      next: (books) => {
        this.books = [...books]
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
