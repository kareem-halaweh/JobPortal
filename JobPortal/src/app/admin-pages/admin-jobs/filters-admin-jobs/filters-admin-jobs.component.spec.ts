import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAdminJobsComponent } from './filters-admin-jobs.component';

describe('FiltersAdminJobsComponent', () => {
  let component: FiltersAdminJobsComponent;
  let fixture: ComponentFixture<FiltersAdminJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersAdminJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersAdminJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
