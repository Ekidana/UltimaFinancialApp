import { TestBed } from '@angular/core/testing';

import { BuyunitService } from './buyunit.service';

describe('BuyunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyunitService = TestBed.get(BuyunitService);
    expect(service).toBeTruthy();
  });
});
