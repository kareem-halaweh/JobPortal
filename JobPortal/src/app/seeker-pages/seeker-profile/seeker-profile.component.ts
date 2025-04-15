import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-seeker-profile',
  imports: [
    NgIf
  ],
  templateUrl: './seeker-profile.component.html',
  styleUrls:['./seeker-profile.component.css']
})
export class SeekerProfileComponent {
  isEditMode = false;

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }
}
