import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHeroeComponent } from './ver-heroe.component';

describe('VerHeroeComponent', () => {
  let component: VerHeroeComponent;
  let fixture: ComponentFixture<VerHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
