import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSavedjobComponent } from './header-savedjob.component';

describe('HeaderSavedjobComponent', () => {
  let component: HeaderSavedjobComponent;
  let fixture: ComponentFixture<HeaderSavedjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSavedjobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSavedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
