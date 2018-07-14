import { TestBed, inject } from '@angular/core/testing';

import { CompLibService } from './comp-lib.service';

xdescribe('CompLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompLibService]
    });
  });

  it('should be created', inject([CompLibService], (service: CompLibService) => {
    expect(service).toBeTruthy();
  }));
});
