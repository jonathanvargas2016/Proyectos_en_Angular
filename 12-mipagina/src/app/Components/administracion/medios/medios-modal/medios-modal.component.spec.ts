import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosModalComponent } from './medios-modal.component';

describe('MediosModalComponent', () => {
  let component: MediosModalComponent;
  let fixture: ComponentFixture<MediosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
