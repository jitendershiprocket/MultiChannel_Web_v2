import { TestBed } from '@angular/core/testing';

import { FreshdeskService } from './freshdesk.service';

describe('FreshdeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreshdeskService = TestBed.get(FreshdeskService);
    expect(service).toBeTruthy();
  });
});
