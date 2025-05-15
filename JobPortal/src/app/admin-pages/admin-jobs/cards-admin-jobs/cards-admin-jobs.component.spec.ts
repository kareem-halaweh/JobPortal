import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAdminJobsComponent } from './cards-admin-jobs.component';

describe('CardsAdminJobsComponent', () => {
  let component: CardsAdminJobsComponent;
  let fixture: ComponentFixture<CardsAdminJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsAdminJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAdminJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
