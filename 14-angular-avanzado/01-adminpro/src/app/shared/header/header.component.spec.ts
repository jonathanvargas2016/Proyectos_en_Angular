import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadFileEntity method', () => {
    const mockBuffer = new ArrayBuffer(8)
    const spyService = jest.spyOn(mockMyService, 'downloadFileEntity').mockImplementation(() => of(mockBuffer))
    component.ngOnInit()
    expect(spyService).toBeCalled()  
  })

});
