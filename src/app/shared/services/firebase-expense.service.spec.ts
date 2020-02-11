import { TestBed } from '@angular/core/testing';

import { FirebaseExpenseService } from './firebase-expense.service';

describe('FirebaseExpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseExpenseService = TestBed.get(FirebaseExpenseService);
    expect(service).toBeTruthy();
  });
});
