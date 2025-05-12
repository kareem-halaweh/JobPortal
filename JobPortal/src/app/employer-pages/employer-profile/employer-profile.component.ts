import { Component } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule, RouterLink],
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent {
  isEditMode = false;
  isOwner = false;

  companyName = 'Tech Easy Life Inc.';
  industry = 'Software Development';
  email = 'hr@easylife.com';
  phone = '+1234567890';
  location = 'Ramallah, Palestine';
  description = 'Our company is made to make your life easier, join us and become on of us. ';

  bannerUrl = 'banner.jpg';
  profileImageUrl = 'logo1.png';

  topEmployers = [
    {name: 'Ahmad Yasin', avatar: 'pfp1.jpg'},
    {name: 'Ola Radi', avatar: 'pfp2.jpg'},
    {name: 'Zena Ali', avatar: 'pfp3.jpg'},
    {name: 'Ali Yusuf', avatar: 'pfp4.jpg'},
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
