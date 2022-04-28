import { TestBed } from '@angular/core/testing';

import { RiyaService } from './Riya.service';

describe('RiyaService', () => {
  let service: RiyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
