import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({

  selector: 'app-seeker-profile',
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
    NgClass,

  ],
  templateUrl: './seeker-profile.component.html',
  standalone: true,
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent {
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  isEditMode = false;

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }


  firstName = 'Wafaa';
  lastName = 'Adham';
  gender = 'male ';
  age = 30;
  email = 'WafaAdham@gmail.com';
  phone = '+0000000000000';
  password = 'idkkkkkkkkk';
  location = 'Nablus';
  dob = 'yyyy/MM/dd';
  description = 'Engineer';



}
