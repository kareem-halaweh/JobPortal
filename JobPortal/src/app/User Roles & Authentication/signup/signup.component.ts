import { Component } from '@angular/core';
import {HeaderTextComponent} from '../../shared components/header-text/header.component';
import {ButtonComponent} from '../../shared components/button/button.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [
    RouterLink

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
