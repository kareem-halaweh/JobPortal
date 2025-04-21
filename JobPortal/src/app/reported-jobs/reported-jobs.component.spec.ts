import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedJobsComponent } from './reported-jobs.component';

describe('ReportedJobsComponent', () => {
  let component: ReportedJobsComponent;
  let fixture: ComponentFixture<ReportedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
