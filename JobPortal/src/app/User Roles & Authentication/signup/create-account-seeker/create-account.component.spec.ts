import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponentSeeker } from './create-account.component';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponentSeeker;
  let fixture: ComponentFixture<CreateAccountComponentSeeker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountComponentSeeker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountComponentSeeker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
