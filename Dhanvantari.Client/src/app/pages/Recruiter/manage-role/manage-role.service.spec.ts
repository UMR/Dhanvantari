import { TestBed } from '@angular/core/testing';

import { ManageRoleService } from './manage-role.service';

describe('ManageRoleService', () => {
  let service: ManageRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
