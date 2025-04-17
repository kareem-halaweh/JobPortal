import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowJobComponent } from './row-job.component';

describe('RowJobComponent', () => {
  let component: RowJobComponent;
  let fixture: ComponentFixture<RowJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
