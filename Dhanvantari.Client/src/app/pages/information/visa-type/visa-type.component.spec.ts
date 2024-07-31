import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaTypeComponent } from './visa-type.component';

describe('VisaTypeComponent', () => {
  let component: VisaTypeComponent;
  let fixture: ComponentFixture<VisaTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaTypeComponent]
    });
    fixture = TestBed.createComponent(VisaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
