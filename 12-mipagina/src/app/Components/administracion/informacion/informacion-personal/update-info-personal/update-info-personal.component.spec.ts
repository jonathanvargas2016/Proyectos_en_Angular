import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoPersonalComponent } from './update-info-personal.component';

describe('UpdateInfoPersonalComponent', () => {
  let component: UpdateInfoPersonalComponent;
  let fixture: ComponentFixture<UpdateInfoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
