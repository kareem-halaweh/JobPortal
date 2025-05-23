import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersApplicationComponent } from './filters-application.component';

describe('FiltersApplicationComponent', () => {
  let component: FiltersApplicationComponent;
  let fixture: ComponentFixture<FiltersApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
