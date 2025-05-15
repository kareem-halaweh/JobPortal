import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAppliedJobsComponent } from './pagination-applied-jobs.component';

describe('PaginationAppliedJobsComponent', () => {
  let component: PaginationAppliedJobsComponent;
  let fixture: ComponentFixture<PaginationAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationAppliedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
