import { TestBed, inject } from '@angular/core/testing';

import { GrabAllService } from './grab-all.service';

describe('GrabAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrabAllService]
    });
  });

  it('should be created', inject([GrabAllService], (service: GrabAllService) => {
    expect(service).toBeTruthy();
  }));
});
