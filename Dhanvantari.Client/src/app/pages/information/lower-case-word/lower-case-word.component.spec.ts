import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerCaseWordComponent } from './lower-case-word.component';

describe('LowerCaseWordComponent', () => {
  let component: LowerCaseWordComponent;
  let fixture: ComponentFixture<LowerCaseWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerCaseWordComponent]
    });
    fixture = TestBed.createComponent(LowerCaseWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
