import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEmployerJobsComponent } from './filter-employer-jobs.component';

describe('FilterEmployerJobsComponent', () => {
  let component: FilterEmployerJobsComponent;
  let fixture: ComponentFixture<FilterEmployerJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterEmployerJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterEmployerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
