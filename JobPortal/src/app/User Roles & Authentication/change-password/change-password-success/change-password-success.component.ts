import { Component } from '@angular/core';
import {HeaderTextComponent} from '../../../shared components/header-text/header.component';

@Component({
  selector: 'app-change-password-success',
  imports: [
    HeaderTextComponent

  ],
  templateUrl: './change-password-success.component.html',
  styleUrl: './change-password-success.component.css'
})
export class ChangePasswordSuccessComponent {
  submitted = false;
}
