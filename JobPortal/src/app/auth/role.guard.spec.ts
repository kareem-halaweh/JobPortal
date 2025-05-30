import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleGuard } from './role.guard';
import { provideHttpClientTesting} from '@angular/common/http/testing';
import {AuthService} from '../services/auth.service';

describe('roleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => roleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(),AuthService,]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
