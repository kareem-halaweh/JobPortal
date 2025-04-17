import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerUploadResumeComponent } from './seeker-upload-resume.component';

describe('SeekerUploadResumeComponent', () => {
  let component: SeekerUploadResumeComponent;
  let fixture: ComponentFixture<SeekerUploadResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerUploadResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekerUploadResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
