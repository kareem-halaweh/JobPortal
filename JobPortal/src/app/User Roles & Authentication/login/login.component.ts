import { Component } from '@angular/core';import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {LabelComponent} from '../../shared components/label/label.component';
import {InputComponent} from '../../shared components/input/input.component';
import {ButtonComponent} from '../../shared components/button/button.component';
import {HeaderTextComponent} from '../../shared components/header-text/header.component';

@Component({
  selector: 'app-login',
  imports: [
    LabelComponent,
    InputComponent,
    NgClass,
    ButtonComponent,
    RouterLink,
    LabelComponent,
    InputComponent,
    ButtonComponent,
    HeaderTextComponent,
    HeaderTextComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submitted = false;




}
