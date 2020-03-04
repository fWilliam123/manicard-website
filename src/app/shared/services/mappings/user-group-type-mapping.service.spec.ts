import { TestBed } from '@angular/core/testing';

import { UserGroupTypeMappingService } from './user-group-type-mapping.service';

describe('UserGroupTypeMappingService', () => {
  let service: UserGroupTypeMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGroupTypeMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
