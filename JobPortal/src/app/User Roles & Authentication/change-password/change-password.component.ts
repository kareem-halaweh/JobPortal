import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderTextComponent} from '../../shared components/header-text/header.component';
import {LabelComponent} from '../../shared components/label/label.component';
import {InputComponent} from '../../shared components/input/input.component';
import {ButtonComponent} from '../../shared components/button/button.component';

@Component({
  selector: 'app-change-password',
  imports: [
    ButtonComponent,
   InputComponent,
    LabelComponent,
    RouterLink,
    HeaderTextComponent,
    LabelComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  submitted = false;
}
