import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderTextComponent} from '../../../shared components/header-text/header.component';
import {LabelComponent} from '../../../shared components/label/label.component';
import {InputComponent} from '../../../shared components/input/input.component';
import {ButtonComponent} from '../../../shared components/button/button.component';

@Component({
  selector: 'app-signup-job-seeker',
  imports: [

    RouterLink,
    HeaderTextComponent,
    LabelComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './signup-job-seeker.component.html',
  styleUrl: './signup-job-seeker.component.css'
})
export class SignupJobSeekerComponent {
  submitted = false;
}
