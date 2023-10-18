import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterlooComponent } from './waterloo.component';

describe('WaterlooComponent', () => {
  let component: WaterlooComponent;
  let fixture: ComponentFixture<WaterlooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterlooComponent]
    });
    fixture = TestBed.createComponent(WaterlooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
