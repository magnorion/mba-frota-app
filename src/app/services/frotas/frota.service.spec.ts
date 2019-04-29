import { TestBed } from '@angular/core/testing';

import { FrotaService } from './frota.service';

describe('FrotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrotaService = TestBed.get(FrotaService);
    expect(service).toBeTruthy();
  });
});
