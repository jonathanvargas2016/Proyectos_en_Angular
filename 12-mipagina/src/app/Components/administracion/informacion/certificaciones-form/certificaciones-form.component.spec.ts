import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionesFormComponent } from './certificaciones-form.component';

describe('CertificacionesFormComponent', () => {
  let component: CertificacionesFormComponent;
  let fixture: ComponentFixture<CertificacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificacionesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
