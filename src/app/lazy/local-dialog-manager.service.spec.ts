import { TestBed } from '@angular/core/testing';

import { LocalDialogManagerService } from './local-dialog-manager.service';

describe('LocalDialogManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalDialogManagerService = TestBed.get(LocalDialogManagerService);
    expect(service).toBeTruthy();
  });
});
