import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHeroeComponent } from './buscar-heroe.component';

describe('BuscarHeroeComponent', () => {
  let component: BuscarHeroeComponent;
  let fixture: ComponentFixture<BuscarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
