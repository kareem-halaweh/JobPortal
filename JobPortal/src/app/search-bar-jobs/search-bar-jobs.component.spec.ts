import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarJobsComponent } from './search-bar-jobs.component';

describe('SearchBarJobsComponent', () => {
  let component: SearchBarJobsComponent;
  let fixture: ComponentFixture<SearchBarJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
