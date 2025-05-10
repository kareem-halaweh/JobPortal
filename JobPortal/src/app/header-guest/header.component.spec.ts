import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HeaderGuestComponent} from './header.component';



describe('HeaderAdminComponent', () => {
  let component: HeaderGuestComponent;
  let fixture: ComponentFixture<HeaderGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
