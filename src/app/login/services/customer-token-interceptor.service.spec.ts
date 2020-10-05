import { TestBed } from '@angular/core/testing';

import { CustomerTokenInterceptorService } from './customer-token-interceptor.service';

describe('CustomerTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerTokenInterceptorService = TestBed.get(CustomerTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
