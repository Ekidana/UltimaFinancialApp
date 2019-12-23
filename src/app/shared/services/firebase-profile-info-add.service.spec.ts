import { TestBed } from '@angular/core/testing';

import { FirebaseProfileInfoAddService } from './firebase-profile-info-add.service';

describe('FirebaseProfileInfoAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseProfileInfoAddService = TestBed.get(FirebaseProfileInfoAddService);
    expect(service).toBeTruthy();
  });
});
