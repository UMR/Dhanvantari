import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionTypeComponent } from './institution-type.component';

describe('InstitutionTypeComponent', () => {
  let component: InstitutionTypeComponent;
  let fixture: ComponentFixture<InstitutionTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionTypeComponent]
    });
    fixture = TestBed.createComponent(InstitutionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
