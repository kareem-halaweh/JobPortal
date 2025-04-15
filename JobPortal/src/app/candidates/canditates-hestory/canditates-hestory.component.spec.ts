import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanditatesHestoryComponent } from './canditates-hestory.component';

describe('CanditatesHestoryComponent', () => {
  let component: CanditatesHestoryComponent;
  let fixture: ComponentFixture<CanditatesHestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanditatesHestoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanditatesHestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
