import { TestBed } from '@angular/core/testing';

import { AssetAccountService } from './asset-account.service';

describe('AssetAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetAccountService = TestBed.get(AssetAccountService);
    expect(service).toBeTruthy();
  });
});
