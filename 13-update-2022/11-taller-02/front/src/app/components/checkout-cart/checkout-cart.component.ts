import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { MessageBarService } from '../../interfaces/message-bar.interface';
import { TotalPurchase } from '../../interfaces/total-purchase.interface';
import { BookService } from '../../services/book.service';
import { decreaseCount } from '../../store/book.actions';
import { updatePurchase } from '../../store/purchase.actions';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit, OnDestroy {

  booksForm!: FormGroup
  disableInput: boolean = true
  private formBuilder!: FormBuilder
  private subscriptions: Subscription[] = []
  constructor(
    private bookService: BookService,
    private store: Store<{ count: number, purchase: TotalPurchase }>,
    private messageService: MessageService,
    private router: Router,
    private injector: Injector) {

    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit(): void {
    this.getItemsCart()
    this.setForm();
  }

  setForm() {
    this.booksForm = this.formBuilder.group({
      books: this.formBuilder.array([]),
    })

    this.subscriptions.push(this.booksArray.valueChanges.subscribe((data: Book[]) => {
      const subtotalPurchase = data.reduce((total, book) => total + book.totalBook!, 0);
      this.store.dispatch(updatePurchase({ subtotal: subtotalPurchase }))
    })
    )

  }


  setFormWithDataBook(books: Book[]) {

    books.forEach((item) => {
      const bookForm = this.formBuilder.group({
        id: [item.id],
        amount: [1, [Validators.min(1)]],
        thumbnail: [item.thumbnail],
        title: [item.title],
        price: [item.price],
        totalBook: [item.price]
      })
      this.booksArray.push(bookForm)
    })

  }


  getItemsCart() {
    this.bookService.getItemsCart()?.subscribe(
      {
        next: (data) => {
          this.setFormWithDataBook(data);

          if (data.length === 0) {
            this.router.navigate(['/'])
          }
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  removeBook(idBook: number, index: number) {
    this.bookService.deleteItemCart(idBook).subscribe(
      {
        next: (res) => {
          this.booksArray.removeAt(index);
          this.store.dispatch(decreaseCount());
          this.showMessage({ severity: "success", summary: "Success", detail: res.message })
          if (this.booksArray.length === 0) {
            this.router.navigate(['/'])
          }
        },
        error: (err) => {
          this.showMessage({ severity: "error", summary: "Error", detail: err.message })
        }
      }
    )
  }


  showMessage({ severity, summary, detail }: MessageBarService) {
    this.messageService.add({ severity, summary, detail });
  }

  reduceAmount(index: number) {

    let amount: number = Number(this.getControlByIndex(index, 'amount')?.value);
    const price: number = Number(this.getControlByIndex(index, 'price')?.value);

    amount--;
    if (amount <= 1) {
      amount = 1;
    }

    this.getControlByIndex(index, 'amount')?.setValue(amount);
    this.getControlByIndex(index, 'totalBook')?.setValue(amount * price);
  }

  increaseAmount(index: number) {
    let amount: number = Number(this.getControlByIndex(index, 'amount')?.value);
    amount++;
    this.getControlByIndex(index, 'amount')?.setValue(amount);

    const price: number = Number(this.getControlByIndex(index, 'price')?.value);

    this.getControlByIndex(index, 'totalBook')?.setValue(amount * price);
  }

  getControlByIndex(index: number, control: string) {
    return this.booksArray.at(index).get(control)
  }

  get booksArray() {
    return this.booksForm?.get("books") as FormArray;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item?.unsubscribe())
  }


}
