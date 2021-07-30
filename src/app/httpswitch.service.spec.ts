import { TestBed } from '@angular/core/testing';

import { HttpswitchService } from './httpswitch.service';

describe('HttpswitchService', () => {
  let service: HttpswitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpswitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
