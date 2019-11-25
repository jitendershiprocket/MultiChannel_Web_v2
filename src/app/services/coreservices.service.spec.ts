import { TestBed } from '@angular/core/testing';

import { CoreservicesService } from './coreservices.service';

describe('CoreservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreservicesService = TestBed.get(CoreservicesService);
    expect(service).toBeTruthy();
  });
});
