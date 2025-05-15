import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAppliedJobComponent } from './filters-applied-job.component';

describe('FiltersAppliedJobComponent', () => {
  let component: FiltersAppliedJobComponent;
  let fixture: ComponentFixture<FiltersAppliedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersAppliedJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersAppliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
