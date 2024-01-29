import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { totalPurchaseReductor } from '../../store/purchase.reducer';
import { SummaryCartComponent } from './summary-cart.component';

describe('SummaryCartComponent', () => {
  let component: SummaryCartComponent;
  let fixture: ComponentFixture<SummaryCartComponent>;
  let mockMessageService = {
    add: jest.fn(),
  }
  let formBuilder: FormBuilder;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryCartComponent],
      imports: [StoreModule.forRoot(
        {
          purchase: totalPurchaseReductor,
        }
      ), FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: MessageService, useValue: mockMessageService
        }

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SummaryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should check the size of formArray when fn[ngOnInit] is executed', () => {
    component.ngOnInit();
    expect(component.promosArray.length).toEqual(1);
  })

  it('should add new formGroup when fn[addNewPromo] is executed', () => {
    component.addNewPromo();
    expect(component.promosArray.length).toEqual(2);
  })

  it('should remove a formGroup when fn[removeCode] is executed', () => {


    const mockPromoGroup: FormGroup = formBuilder.group({
      id: null,
      code: "UIOF41",
      value: null,
      applied: true
    });

    const mockPromoCodeValid = [
      { id: 1, code: 'APPJSV', value: 7, applied: false },
      { id: 2, code: 'BP8263', value: 1, applied: false },
      { id: 3, code: 'UIOF41', value: 10, applied: false }
    ]

    component.promosArray.push(mockPromoGroup)

    component.removeCode(1);
    expect(component.promosArray.length).toEqual(1)
    expect(component.promoCodeValid).toEqual(mockPromoCodeValid)
  })

  it('should change values of purchase when fn[applyCode] is executed', () => {
    const mockPromoGroup: FormGroup = formBuilder.group({
      id: null,
      code: "UIOF41",
      value: null,
      applied: true
    });

    const mockPromoCodeValid = [
      { id: 1, code: 'APPJSV', value: 7, applied: false },
      { id: 2, code: 'BP8263', value: 1, applied: false },
      { id: 3, code: 'UIOF41', value: 10, applied: true }
    ]

    component.promosArray.push(mockPromoGroup)
    component.applyCode(1);
    expect(component.promoCodeValid).toEqual(mockPromoCodeValid)
  })

  it('should return a control when fn[getControlByIndex] is executed', () => {
    const control = component.getControlByIndex(0, 'applied');
    expect(control?.value).toEqual(false)
  })

  it('should call messageService when fn[showMessage] is executed', () => {

    const spyMessageService = jest.spyOn(mockMessageService, 'add')
    component.showMessage({ severity: "error", summary: "Test", detail: "test" });
    expect(spyMessageService).toHaveBeenCalled();
  })

});
