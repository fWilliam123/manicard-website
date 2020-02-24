import { TestBed } from '@angular/core/testing';
import { ManagementPartnerService } from './management-partner.service';

describe('ManagementPartnerService', () => {
  let service: ManagementPartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementPartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
