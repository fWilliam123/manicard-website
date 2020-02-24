import { TestBed } from '@angular/core/testing';
import { EasySnackBarService } from './easy-snack-bar.service';

describe('EasySnackBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasySnackBarService = TestBed.inject(EasySnackBarService);
    expect(service).toBeTruthy();
  });
});
