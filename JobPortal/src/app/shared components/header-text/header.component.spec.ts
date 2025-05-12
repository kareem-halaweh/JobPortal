import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HeaderTextComponent} from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderTextComponent;
  let fixture: ComponentFixture<HeaderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
