import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsDltComponent } from './funds-dlt.component';

describe('FundsDltComponent', () => {
  let component: FundsDltComponent;
  let fixture: ComponentFixture<FundsDltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundsDltComponent]
    });
    fixture = TestBed.createComponent(FundsDltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
