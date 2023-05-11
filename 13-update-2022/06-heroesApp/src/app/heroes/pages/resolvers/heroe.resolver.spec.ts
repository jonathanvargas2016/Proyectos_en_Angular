import { TestBed } from '@angular/core/testing';

import { HeroeResolver } from './heroe.resolver';

describe('HeroeResolver', () => {
  let resolver: HeroeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeroeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
