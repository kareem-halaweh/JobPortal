import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedJobComponent } from './reported-job.component';

describe('ReportedJobComponent', () => {
  let component: ReportedJobComponent;
  let fixture: ComponentFixture<ReportedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
