import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApplicationComponent } from './table-application.component';

describe('TableApplicationComponent', () => {
  let component: TableApplicationComponent;
  let fixture: ComponentFixture<TableApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
