import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {LabelComponent} from '../../../shared components/label/label.component';
import {InputComponent} from '../../../shared components/input/input.component';
import {HeaderTextComponent} from '../../../shared components/header-text/header.component';
import {ButtonComponent} from '../../../shared components/button/button.component';

@Component({
  selector: 'app-new-password-reset-password',
  imports: [

    RouterLink,
    LabelComponent,
    InputComponent,
    HeaderTextComponent,
    ButtonComponent
  ],
  templateUrl: './new-password-reset-password.component.html',
  styleUrl: './new-password-reset-password.component.css'
})
export class NewPasswordResetPasswordComponent {
  submitted = false;

}
