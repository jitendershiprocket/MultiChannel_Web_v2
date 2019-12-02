import { TestBed } from '@angular/core/testing';

import { UploadfileadminService } from './uploadfileadmin.service';

describe('UploadfileadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadfileadminService = TestBed.get(UploadfileadminService);
    expect(service).toBeTruthy();
  });
});
