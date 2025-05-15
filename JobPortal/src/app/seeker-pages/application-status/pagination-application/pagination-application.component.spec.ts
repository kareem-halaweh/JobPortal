import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationApplicationComponent } from './pagination-application.component';

describe('PaginationApplicationComponent', () => {
  let component: PaginationApplicationComponent;
  let fixture: ComponentFixture<PaginationApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
