import { TestBed } from '@angular/core/testing';

import { LobourService } from './lobour.service';

describe('LobourService', () => {
  let service: LobourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LobourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
