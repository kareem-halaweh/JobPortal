import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared components/button/button.component';
import {HeaderTextComponent} from '../../shared components/header-text/header.component';

@Component({
  selector: 'app-logout',
  imports: [
    ButtonComponent,
    HeaderTextComponent,

  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  submitted = false;
}
