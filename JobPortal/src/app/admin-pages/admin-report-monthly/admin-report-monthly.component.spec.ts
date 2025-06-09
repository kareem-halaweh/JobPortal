import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportMonthlyComponent } from './admin-report-monthly.component';

describe('AdminReportMonthlyComponent', () => {
  let component: AdminReportMonthlyComponent;
  let fixture: ComponentFixture<AdminReportMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
