import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialWordComponent } from './special-word.component';

describe('SpecialWordComponent', () => {
  let component: SpecialWordComponent;
  let fixture: ComponentFixture<SpecialWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialWordComponent]
    });
    fixture = TestBed.createComponent(SpecialWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
