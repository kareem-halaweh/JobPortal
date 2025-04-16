import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-seeker-profile',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './seeker-profile.component.html',
  standalone: true,
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent {
  isEditMode = false;

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }
}
