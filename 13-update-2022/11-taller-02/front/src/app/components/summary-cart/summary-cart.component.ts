import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { MessageBarService } from '../../interfaces/message-bar.interface';
import { Promo } from '../../interfaces/promo.interface';
import { selectSubtotalPurchase } from '../../store/purchase.selectors';

@Component({
  selector: 'app-summary-cart',
  templateUrl: './summary-cart.component.html',
  styleUrls: ['./summary-cart.component.scss']
})
export class SummaryCartComponent implements OnInit, OnDestroy {

  subtotal: number = 0;
  total: number = 0
  shipping: number = 0;
  codeOff: number = 0;
  promosForm!: FormGroup
  promoCodeValid: Promo[] = [
    {
      id: 1,
      code: "APPJSV",
      value: 7,
      applied: false
    },
    {
      id: 2,
      code: "BP8263",
      value: 1,
      applied: false
    },
    {
      id: 3,
      code: "UIOF41",
      value: 10,
      applied: false
    }
  ]
  private subscriptions: Subscription[] = []
  private formBuilder!: FormBuilder;

  constructor(private store: Store<{ purchase: number }>, private injector: Injector, private messageService: MessageService) {
    this.formBuilder = this.injector.get(FormBuilder);

    this.subscriptions.push(
      this.store.pipe(
        select(selectSubtotalPurchase)
      ).subscribe((subtotal) => {
        this.subtotal = subtotal
        this.shipping = subtotal > 100 ? 0 : 5
        this.total = this.subtotal + this.shipping - this.codeOff;
      })
    )
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {

    const codeFormInit = this.formBuilder.group(
      {
        id: [null],
        code: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        value: [null],
        applied: [false]
      }
    )

    this.promosForm = this.formBuilder.group({
      codes: this.formBuilder.array([])
    })

    this.promosArray?.push(codeFormInit);
  }

  addNewPromo() {
    const newCodeForm = this.formBuilder.group(
      {
        id: [null],
        code: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        value: [null],
        applied: [false]

      }
    )
    this.promosArray.push(newCodeForm);
  }

  removeCode(index: number) {
    const promo = (this.promosArray.controls[index] as FormGroup);
    const promoFind = this.promoCodeValid.filter((item) => item.code === promo.getRawValue().code.toUpperCase().trim())[0]
    this.codeOff = this.codeOff - promoFind.value!;
    this.shipping = this.subtotal > 100 ? 0 : 5
    this.total = this.subtotal + this.shipping - this.codeOff;
    this.getControlByIndex(index, 'applied')?.setValue(true);
    this.promoCodeValid = this.promoCodeValid.map((item) => {
      if (item.code === promoFind.code) {
        return (
          {
            ...item,
            applied: false
          }
        )
      } else {
        return item
      }
    })
    this.promosArray.removeAt(index);
  }

  applyCode(index: number) {

    const promo = (this.promosArray.controls[index] as FormGroup);
    const promoFind = this.promoCodeValid.filter((item) => item.code === promo.getRawValue().code.toUpperCase().trim())[0]

    if (promoFind) {

      if (promoFind.applied) {
        this.showMessage({ severity: "error", summary: "Error", detail: "code has already been used" })
      } else {
        this.codeOff = this.codeOff + promoFind.value!;
        this.shipping = this.subtotal > 100 ? 0 : 5
        this.total = this.subtotal + this.shipping - this.codeOff;
        this.getControlByIndex(index, 'applied')?.setValue(true);
        this.promoCodeValid = this.promoCodeValid.map((item) => {
          if (item.code === promoFind.code) {
            return (
              {
                ...item,
                applied: true
              }
            )
          } else {
            return item
          }
        })


      }
    } else {
      this.showMessage({ severity: "error", summary: "Error", detail: "Code does not exit" })

    }

  }

  getControlByIndex(index: number, control: string) {
    return this.promosArray.at(index)?.get(control)
  }

  showMessage({ severity, summary, detail }: MessageBarService) {
    this.messageService.add({ severity, summary, detail });
  }

  get promosArray() {
    return this.promosForm?.get("codes") as FormArray;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item?.unsubscribe())
  }


}
