import { TestBed } from '@angular/core/testing';

import { MipaginaService } from './mipagina.service';

describe('MipaginaService', () => {
  let service: MipaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MipaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
