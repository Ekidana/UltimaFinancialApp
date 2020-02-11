import { TestBed } from '@angular/core/testing';

import { FirebaseUnittrustcartService } from './firebase-unittrustcart.service';

describe('FirebaseUnittrustcartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUnittrustcartService = TestBed.get(FirebaseUnittrustcartService);
    expect(service).toBeTruthy();
  });
});
