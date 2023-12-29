import { TestBed } from '@angular/core/testing';

import { HsCardsApiService } from './hs-cards-api.service';

describe('HsCardsApiService', () => {
  let service: HsCardsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsCardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
