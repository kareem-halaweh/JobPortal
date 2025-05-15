import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAppliedJobsComponent } from './table-applied-jobs.component';

describe('TableAppliedJobsComponent', () => {
  let component: TableAppliedJobsComponent;
  let fixture: ComponentFixture<TableAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAppliedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
