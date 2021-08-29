import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionContactoFormComponent } from './informacion-contacto-form.component';

describe('InformacionContactoComponent', () => {
  let component: InformacionContactoFormComponent;
  let fixture: ComponentFixture<InformacionContactoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionContactoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionContactoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
