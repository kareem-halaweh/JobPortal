import { Component, OnInit, inject } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule, RouterLink],
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {
  private http = inject(HttpClient);

  isEditMode = false;
  isOwner = true;

  username = 'Tech Easy Life Inc.';
  industry = 'Software Development';
  email = 'hr@easylife.com';
  phone = '+1234567890';
  location = 'Ramallah, Palestine';
  description = 'Our company is made to make your life easier, join us and become on of us. ';
  profileImageUrl = 'logo1.png';

  topEmployers = [
    { name: 'Ahmad Yasin', avatar: 'pfp1.jpg' },
    { name: 'Ola Radi', avatar: 'pfp2.jpg' },
    { name: 'Zena Ali', avatar: 'pfp3.jpg' },
    { name: 'Ali Yusuf', avatar: 'pfp4.jpg' },
  ];

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.get<any>('http://127.0.0.1:8000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        const user = res.user;
        const employer = res.profile;
        this.username = user.username || '';
        this.email = user.email || '';
        this.phone = user.phone_number || '';
        this.location = user.location || '';
        this.industry = employer?.industry || '';
        this.description = employer?.description || '';
      },
      error: () => {}
    });
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    const body = {
      username: this.username,
      email: this.email,
      phone_number: this.phone,
      location: this.location,
      industry: this.industry,
      description: this.description,
    };

    this.http.put('http://127.0.0.1:8000/api/profile/employer', body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        this.toggleEdit();
      },
      error: (err) => {
        console.error('Failed to update profile:', err);
        this.toggleEdit();

      }
    });
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
