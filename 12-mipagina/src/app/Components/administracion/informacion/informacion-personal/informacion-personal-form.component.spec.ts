import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonalFormComponent } from './informacion-personal-form.component';

describe('InformacionPersonalComponent', () => {
  let component: InformacionPersonalFormComponent;
  let fixture: ComponentFixture<InformacionPersonalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPersonalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
