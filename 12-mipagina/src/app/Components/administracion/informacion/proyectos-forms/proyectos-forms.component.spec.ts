import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosFormsComponent } from './proyectos-forms.component';

describe('ProyectosFormsComponent', () => {
  let component: ProyectosFormsComponent;
  let fixture: ComponentFixture<ProyectosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
