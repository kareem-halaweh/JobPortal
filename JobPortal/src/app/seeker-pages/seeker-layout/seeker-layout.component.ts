import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-seeker-layout',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './seeker-layout.component.html',
  styleUrl: './seeker-layout.component.css'
})
export class SeekerLayoutComponent {
  isEditMode = false;

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }
}


