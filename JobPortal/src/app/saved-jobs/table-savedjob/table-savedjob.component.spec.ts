import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSavedjobComponent } from './table-savedjob.component';

describe('TableSavedjobComponent', () => {
  let component: TableSavedjobComponent;
  let fixture: ComponentFixture<TableSavedjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSavedjobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSavedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
