import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationReportedJobsAdminComponent } from './pagination-reported-jobs-admin.component';

describe('PaginationReportedJobsAdminComponent', () => {
  let component: PaginationReportedJobsAdminComponent;
  let fixture: ComponentFixture<PaginationReportedJobsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationReportedJobsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationReportedJobsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
