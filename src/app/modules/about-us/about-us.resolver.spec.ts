import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { aboutUsResolver } from './about-us.resolver';

describe('aboutUsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => aboutUsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
