import { TestBed } from '@angular/core/testing';

import { InstitutionTypeService } from './institution-type.service';

describe('InstitutionTypeService', () => {
  let service: InstitutionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
