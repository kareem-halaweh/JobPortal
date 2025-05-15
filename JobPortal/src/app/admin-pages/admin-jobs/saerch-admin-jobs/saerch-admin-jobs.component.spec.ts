import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaerchAdminJobsComponent } from './saerch-admin-jobs.component';

describe('SaerchAdminJobsComponent', () => {
  let component: SaerchAdminJobsComponent;
  let fixture: ComponentFixture<SaerchAdminJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaerchAdminJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaerchAdminJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
