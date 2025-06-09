import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminReportMonthlyComponent } from './card-admin-report-monthly.component';

describe('CardAdminReportMonthlyComponent', () => {
  let component: CardAdminReportMonthlyComponent;
  let fixture: ComponentFixture<CardAdminReportMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAdminReportMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAdminReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
