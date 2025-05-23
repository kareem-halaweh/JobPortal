import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerProfileComponent } from './seeker-profile.component';

describe('SeekerProfileComponent', () => {
  let component: SeekerProfileComponent;
  let fixture: ComponentFixture<SeekerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
