import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroeComponent } from './home-heroe.component';

describe('HomeHeroeComponent', () => {
  let component: HomeHeroeComponent;
  let fixture: ComponentFixture<HomeHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
