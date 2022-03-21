import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLaboralFormComponent } from './experiencia-laboral-form.component';

describe('ExperienciaLaboralComponent', () => {
  let component: ExperienciaLaboralFormComponent;
  let fixture: ComponentFixture<ExperienciaLaboralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLaboralFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaLaboralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
