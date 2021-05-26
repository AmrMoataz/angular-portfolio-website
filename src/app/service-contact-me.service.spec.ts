import { TestBed } from '@angular/core/testing';

import { ServiceContactMeService } from './service-contact-me.service';

describe('ServiceContactMeService', () => {
  let service: ServiceContactMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContactMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
