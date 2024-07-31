import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRecruiterRoleComponent } from './assign-recruiter-role.component';

describe('AssignRecruiterRoleComponent', () => {
  let component: AssignRecruiterRoleComponent;
  let fixture: ComponentFixture<AssignRecruiterRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignRecruiterRoleComponent]
    });
    fixture = TestBed.createComponent(AssignRecruiterRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
