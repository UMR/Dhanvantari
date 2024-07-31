import { TestBed } from '@angular/core/testing';

import { AssignRecruiterRoleService } from './assign-recruiter-role.service';

describe('AssignRecruiterRoleService', () => {
  let service: AssignRecruiterRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignRecruiterRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
