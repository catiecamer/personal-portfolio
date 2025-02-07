import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadacomputersComponent } from './canadacomputers.component';

describe('CanadacomputersComponent', () => {
  let component: CanadacomputersComponent;
  let fixture: ComponentFixture<CanadacomputersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanadacomputersComponent]
    });
    fixture = TestBed.createComponent(CanadacomputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
