import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionLicenseRequirementComponent } from './position-license-requirement.component';

describe('PositionLicenseRequirementComponent', () => {
  let component: PositionLicenseRequirementComponent;
  let fixture: ComponentFixture<PositionLicenseRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionLicenseRequirementComponent]
    });
    fixture = TestBed.createComponent(PositionLicenseRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
