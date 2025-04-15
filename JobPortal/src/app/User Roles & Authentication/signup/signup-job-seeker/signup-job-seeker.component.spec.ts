import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupJobSeekerComponent } from './signup-job-seeker.component';

describe('SignupJobSeekerComponent', () => {
  let component: SignupJobSeekerComponent;
  let fixture: ComponentFixture<SignupJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
