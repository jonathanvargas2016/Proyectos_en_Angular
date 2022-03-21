import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoPerComponent } from './card-info-per.component';

describe('TablaComponent', () => {
  let component: CardInfoPerComponent;
  let fixture: ComponentFixture<CardInfoPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoPerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
