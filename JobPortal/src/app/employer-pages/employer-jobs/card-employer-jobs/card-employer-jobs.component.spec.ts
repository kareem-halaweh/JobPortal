import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmployerJobsComponent } from './card-employer-jobs.component';

describe('CardEmployerJobsComponent', () => {
  let component: CardEmployerJobsComponent;
  let fixture: ComponentFixture<CardEmployerJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmployerJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEmployerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
