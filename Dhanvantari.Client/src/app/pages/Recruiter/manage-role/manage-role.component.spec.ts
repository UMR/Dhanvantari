import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoleComponent } from './manage-role.component';

describe('ManageRoleComponent', () => {
  let component: ManageRoleComponent;
  let fixture: ComponentFixture<ManageRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRoleComponent]
    });
    fixture = TestBed.createComponent(ManageRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
