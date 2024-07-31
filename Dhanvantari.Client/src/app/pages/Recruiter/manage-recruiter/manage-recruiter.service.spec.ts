import { TestBed } from '@angular/core/testing';

import { ManageRecruiterService } from './manage-recruiter.service';

describe('ManageRecruiterService', () => {
  let service: ManageRecruiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageRecruiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
