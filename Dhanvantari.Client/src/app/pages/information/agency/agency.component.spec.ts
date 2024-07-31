import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyComponent } from './agency.component';

describe('AgencyComponent', () => {
  let component: AgencyComponent;
  let fixture: ComponentFixture<AgencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyComponent]
    });
    fixture = TestBed.createComponent(AgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
