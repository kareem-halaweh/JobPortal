import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminReportMonthlyComponent } from './header-admin-report-monthly.component';

describe('HeaderAdminReportMonthlyComponent', () => {
  let component: HeaderAdminReportMonthlyComponent;
  let fixture: ComponentFixture<HeaderAdminReportMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAdminReportMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdminReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
