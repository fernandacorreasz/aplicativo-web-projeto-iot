import { TestBed } from '@angular/core/testing';

import { ServiceDeviceService } from './service-device.service';

describe('ServiceDeviceService', () => {
  let service: ServiceDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
