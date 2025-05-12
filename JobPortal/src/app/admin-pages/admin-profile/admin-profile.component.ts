import { Component } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule, RouterLink],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  isEditMode = false;
  isOwner = true;

  fullName = 'admin admin';
  role = 'admin';
  email = 'admin@example.com';
  phone = '+1111111111';

  bannerUrl = 'banner.jpg';
  profileImageUrl = 'pfp1.jpg';

  topEmployers = [
    { name: 'Crypto Inc.', avatar: 'assets/avatars/avatar1.png' },
    { name: 'Scamify LLC', avatar: 'assets/avatars/avatar2.png' },
    { name: 'GhostJobs', avatar: 'assets/avatars/avatar3.png' }
  ];

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges(): void {
    this.toggleEdit();
  }

  onBannerImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = e => this.bannerUrl = e.target?.result as string;
      reader.readAsDataURL(input.files[0]);
    }
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
