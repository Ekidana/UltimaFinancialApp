import { TestBed } from '@angular/core/testing';

import { FirebaseUnittrustService } from './firebase-unittrust.service';

describe('FirebaseUnittrustService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUnittrustService = TestBed.get(FirebaseUnittrustService);
    expect(service).toBeTruthy();
  });
});
