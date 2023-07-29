import { TestBed } from '@angular/core/testing';

import { Statut } from './statut';

describe('StatutService', () => {
  let service: Statut;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Statut);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
