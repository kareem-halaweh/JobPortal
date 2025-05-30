import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReportedJobsAdminComponent } from './table-reported-jobs-admin.component';

describe('TableReportedJobsAdminComponent', () => {
  let component: TableReportedJobsAdminComponent;
  let fixture: ComponentFixture<TableReportedJobsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReportedJobsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReportedJobsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
