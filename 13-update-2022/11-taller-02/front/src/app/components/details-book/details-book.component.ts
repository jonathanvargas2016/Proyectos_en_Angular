import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';
import { increaseCount } from '../../store/book.actions';
import { MessageService } from 'primeng/api';
import { MessageBarService } from '../../interfaces/message-bar.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss']
})
export class DetailsBookComponent {

  @Input() book!: Book

  constructor(private bookService: BookService,
    private store: Store<{ count: number }>,
    private messageService: MessageService) {
  }

  addItem(book: Book) {
    const data = {...book}
    this.bookService.getItemsCart().pipe(
      filter((books) => {
        const bookFind = books.some((item) => item.id === book.id)
        if (bookFind) {
          this.showMessage({ severity: "warn", summary: "Warning", detail: "Book already was added" })
          return false;
        }
        return true;
      }),
      switchMap(() => this.bookService.addBookToCart(data))
    ).subscribe({
      next: (_res) => {
        this.showMessage({ severity: "success", summary: "Success", detail: "Book was added" })
        this.store.dispatch(increaseCount())
      },
      error: (err) => {
        this.showMessage({ severity: "error", summary: "Error", detail: err.message })
      }
    })
  }

  showMessage({ severity, summary, detail }: MessageBarService) {
    this.messageService.add({ severity, summary, detail });
  }

}
