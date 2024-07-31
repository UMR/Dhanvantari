import { TestBed } from '@angular/core/testing';

import { ApplicantTypeService } from './applicant-type.service';

describe('ApplicantTypeService', () => {
  let service: ApplicantTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
