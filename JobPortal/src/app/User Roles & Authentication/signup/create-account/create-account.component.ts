import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderTextComponent} from '../../../shared components/header-text/header.component';
import {LabelComponent} from '../../../shared components/label/label.component';
import {InputComponent} from '../../../shared components/input/input.component';
import {ButtonComponent} from '../../../shared components/button/button.component';

@Component({
  selector: 'app-create-account',
  imports: [

    RouterLink,
    HeaderTextComponent,
    LabelComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  submitted = false;
}
