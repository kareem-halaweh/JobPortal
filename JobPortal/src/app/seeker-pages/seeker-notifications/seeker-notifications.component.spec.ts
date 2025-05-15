import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerNotificationsComponent } from './seeker-notifications.component';

describe('SeekerNotificationsComponent', () => {
  let component: SeekerNotificationsComponent;
  let fixture: ComponentFixture<SeekerNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
