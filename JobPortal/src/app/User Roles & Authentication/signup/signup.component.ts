import { Component } from '@angular/core';
import {HeaderTextComponent} from '../../shared components/header-text/header.component';
import {ButtonComponent} from '../../shared components/button/button.component';

@Component({
  selector: 'app-signup',
  imports: [
    HeaderTextComponent,
    ButtonComponent

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
