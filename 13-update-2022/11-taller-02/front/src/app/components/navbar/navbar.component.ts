import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Menu } from '../../interfaces/menu.interface';
import { BookService } from '../../services/book.service';
import { initialState } from '../../store/book.actions';
import { selectCount } from '../../store/book.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: Menu[] = [
    {
      title: "All",
      url: ""
    },
    {
      title: "Programming",
      url: ""
    },
    {
      title: "Web Development",
      url: ""
    },
    {
      title: "Security",
      url: ""
    }
  ]

  countStoreItems$!: Observable<number>
  constructor(
    private bookService: BookService,
    private store: Store<{ count: number }>,
  ) {
    this.countStoreItems$ = store.select(selectCount)
  }

  ngOnInit(): void {
    this.bookService.getCountItemsCart()?.subscribe(
      {
        next: (count) => {
          this.store.dispatch(initialState({ value: count }))
        },
        error: (err) => {
          console.log("error", err)
        }
      }
    )
  }
}
