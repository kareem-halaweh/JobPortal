import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFavoriteJobsComponent } from './filters-favorite-jobs.component';

describe('FiltersFavoriteJobsComponent', () => {
  let component: FiltersFavoriteJobsComponent;
  let fixture: ComponentFixture<FiltersFavoriteJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersFavoriteJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersFavoriteJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
