import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedJobsAdminComponent } from './reported-jobs-admin.component';

describe('ReportedJobsAdminComponent', () => {
  let component: ReportedJobsAdminComponent;
  let fixture: ComponentFixture<ReportedJobsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedJobsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedJobsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
