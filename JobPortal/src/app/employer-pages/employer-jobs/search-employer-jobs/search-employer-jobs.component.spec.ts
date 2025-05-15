import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployerJobsComponent } from './search-employer-jobs.component';

describe('SearchEmployerJobsComponent', () => {
  let component: SearchEmployerJobsComponent;
  let fixture: ComponentFixture<SearchEmployerJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEmployerJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
