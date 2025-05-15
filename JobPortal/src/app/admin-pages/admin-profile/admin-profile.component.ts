import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  isEditMode = false;
  isOwner = true;

  name = 'admin admin';
  role = 'admin';
  email = 'admin@example.com';
  phone = '+1111111111';

  profileImageUrl = 'pfp1.jpg';

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges(): void {
    this.toggleEdit();
  }


  onProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = e => this.profileImageUrl = e.target?.result as string;
      reader.readAsDataURL(input.files[0]);
    }
  }
}
