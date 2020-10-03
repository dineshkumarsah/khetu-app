import { TestBed } from '@angular/core/testing';

import { CartmagentoService } from './cartmagento.service';

describe('CartmagentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartmagentoService = TestBed.get(CartmagentoService);
    expect(service).toBeTruthy();
  });
});
