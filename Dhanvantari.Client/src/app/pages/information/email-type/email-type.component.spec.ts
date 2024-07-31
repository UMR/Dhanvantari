import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTypeComponent } from './email-type.component';

describe('EmailTypeComponent', () => {
  let component: EmailTypeComponent;
  let fixture: ComponentFixture<EmailTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTypeComponent]
    });
    fixture = TestBed.createComponent(EmailTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
