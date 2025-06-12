import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersReportedJobsAdminComponent } from './filters-reported-jobs-admin.component';

describe('FiltersReportedJobsAdminComponent', () => {
  let component: FiltersReportedJobsAdminComponent;
  let fixture: ComponentFixture<FiltersReportedJobsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersReportedJobsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersReportedJobsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
