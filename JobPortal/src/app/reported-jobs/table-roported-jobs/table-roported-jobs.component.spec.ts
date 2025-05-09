import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoportedJobsComponent } from './table-roported-jobs.component';

describe('TableRoportedJobsComponent', () => {
  let component: TableRoportedJobsComponent;
  let fixture: ComponentFixture<TableRoportedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRoportedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRoportedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
