import { TestBed } from '@angular/core/testing';

import { LossCommunicationService } from './loss-communication.service';

describe('LossCommunicationService', () => {
  let service: LossCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LossCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
