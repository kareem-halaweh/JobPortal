import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobsemployeeComponent } from './card-jobsemployee.component';

describe('CardJobsemployeeComponent', () => {
  let component: CardJobsemployeeComponent;
  let fixture: ComponentFixture<CardJobsemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJobsemployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJobsemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
