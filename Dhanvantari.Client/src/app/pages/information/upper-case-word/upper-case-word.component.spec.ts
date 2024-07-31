import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseWordComponent } from './upper-case-word.component';

describe('UpperCaseWordComponent', () => {
  let component: UpperCaseWordComponent;
  let fixture: ComponentFixture<UpperCaseWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperCaseWordComponent]
    });
    fixture = TestBed.createComponent(UpperCaseWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
