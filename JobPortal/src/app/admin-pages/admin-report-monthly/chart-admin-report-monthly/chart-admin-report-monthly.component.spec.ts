import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAdminReportMonthlyComponent } from './chart-admin-report-monthly.component';

describe('ChartAdminReportMonthlyComponent', () => {
  let component: ChartAdminReportMonthlyComponent;
  let fixture: ComponentFixture<ChartAdminReportMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAdminReportMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAdminReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
