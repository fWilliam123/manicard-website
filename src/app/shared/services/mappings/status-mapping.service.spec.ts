import { TestBed } from '@angular/core/testing';

import { StatusMappingService } from './status-mapping.service';

describe('StatusMappingService', () => {
  let service: StatusMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
