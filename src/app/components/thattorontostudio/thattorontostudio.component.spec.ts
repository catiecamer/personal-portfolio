import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THATtorontostudioComponent } from './thattorontostudio.component';

describe('THATtorontostudioComponent', () => {
  let component: THATtorontostudioComponent;
  let fixture: ComponentFixture<THATtorontostudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [THATtorontostudioComponent]
    });
    fixture = TestBed.createComponent(THATtorontostudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
