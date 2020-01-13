import { TestBed } from '@angular/core/testing';

import { EasySnackBarService } from './easy-snack-bar.service';

describe('EasySnackBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasySnackBarService = TestBed.get(EasySnackBarService);
    expect(service).toBeTruthy();
  });
});
