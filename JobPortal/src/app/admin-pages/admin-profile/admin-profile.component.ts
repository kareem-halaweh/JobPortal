import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  private http = inject(HttpClient);

  isEditMode = false;
  isOwner = true;

  username = 'admin admin';
  role = 'admin';
  email = 'admin@example.com';
  phone = '+1111111111';
  profileImageUrl = 'pfp1.jpg';

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
        if (user.role_id !== 1) {
          window.location.href = '/';
          return;
        }

        this.username = user.username || '';
        this.email = user.email || '';
        this.phone = user.phone_number || '';
        this.role = 'admin';
      },
      error: (err) => {
        console.error('Failed to fetch admin profile:', err);
      }
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
      phone_number: this.phone
    };

    this.http.put('http://127.0.0.1:8000/api/profile/admin', body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        this.toggleEdit(); // switch back to view mode
      },
      error: (err) => {
        console.error('Failed to update admin profile:', err);
      }
    });
  }

  onProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.profileImageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
