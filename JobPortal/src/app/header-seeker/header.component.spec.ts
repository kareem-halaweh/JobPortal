import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HeaderSeekerComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderSeekerComponent;
  let fixture: ComponentFixture<HeaderSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
