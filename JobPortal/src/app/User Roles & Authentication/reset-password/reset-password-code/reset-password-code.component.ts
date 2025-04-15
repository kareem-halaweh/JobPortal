import { Component } from '@angular/core';
import {HeaderTextComponent} from '../../../shared components/header-text/header.component';
import {LabelComponent} from '../../../shared components/label/label.component';
import {InputComponent} from '../../../shared components/input/input.component';
import {ButtonComponent} from '../../../shared components/button/button.component';

@Component({
  selector: 'app-reset-password-code',
  imports: [
    HeaderTextComponent,
    LabelComponent,
    InputComponent,
    ButtonComponent

  ],
  templateUrl: './reset-password-code.component.html',
  styleUrl: './reset-password-code.component.css'
})
export class ResetPasswordCodeComponent {
  submitted = false;
}
