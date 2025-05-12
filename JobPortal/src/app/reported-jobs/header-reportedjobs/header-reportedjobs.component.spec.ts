import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReportedjobsComponent } from './header-reportedjobs.component';

describe('HeaderReportedjobsComponent', () => {
  let component: HeaderReportedjobsComponent;
  let fixture: ComponentFixture<HeaderReportedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderReportedjobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderReportedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
