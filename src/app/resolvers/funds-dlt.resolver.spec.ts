import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fundsDltResolver } from './funds-dlt.resolver';

describe('fundsDltResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fundsDltResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
