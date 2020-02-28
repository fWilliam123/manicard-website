import { TestBed } from '@angular/core/testing';

import { MemberTypeMappingService } from './member-type-mapping.service';

describe('MemberTypeMappingService', () => {
  let service: MemberTypeMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberTypeMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
