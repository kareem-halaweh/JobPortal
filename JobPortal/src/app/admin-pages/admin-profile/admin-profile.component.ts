import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  profileForm!: FormGroup;
  isEditMode = false;
  isOwner = true;
  submitted = false;

  profileImageUrl = 'pfp.jpg';
  selectedProfileImage: File | null = null;
  isDefaultPfp = true;
  originalData: any;

  email = '';
  role = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.get<any>('http://localhost:8000/api/profile', {
      headers: {Authorization: `Bearer ${token}`}
    }).subscribe({
      next: (res) => {
        const user = res.user;
        if (user.role_id !== 1) {
          window.location.href = '/';
          return;
        }

        this.originalData = user;
        this.email = user.email || '';
        this.role = user.role?.name || 'admin';

        this.profileForm = this.fb.group({
          username: [user.username || '', Validators.required],
          email: [{value: this.email, disabled: true}, [Validators.required, Validators.email]],
          phone: [user.phone_number || '', Validators.required]
        });

        if (user.profile_img && user.profile_img !== 'pfp.jpg') {
          this.profileImageUrl = user.profile_img;
          this.isDefaultPfp = false;
        }
      },
      error: (err) => {
        console.error('Failed to fetch admin profile:', err);
      }
    });
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
    this.submitted = false;
    if (!this.isEditMode && this.originalData) {
      this.profileForm.patchValue({
        username: this.originalData.username,
        phone: this.originalData.phone_number
      });
      this.profileImageUrl = this.originalData.profile_img || 'pfp.jpg';
      this.isDefaultPfp = this.profileImageUrl === 'pfp.jpg';
      this.selectedProfileImage = null;
    }
  }

  onProfileImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedProfileImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageUrl = reader.result as string;
        this.isDefaultPfp = false;
      };
      reader.readAsDataURL(file);
    }
  }

  removeProfileImage() {
    this.selectedProfileImage = null;
    this.profileImageUrl = 'pfp.jpg';
    this.isDefaultPfp = true;
  }

  saveChanges() {
    this.submitted = true;
    if (this.profileForm.invalid) return;

    const formData = new FormData();
    formData.append('username', this.profileForm.get('username')?.value);
    formData.append('phone_number', this.profileForm.get('phone')?.value); // <- this line is KEY

    if (this.selectedProfileImage) {
      formData.append('profile_img', this.selectedProfileImage);
    } else if (this.isDefaultPfp) {
      formData.append('profile_img', 'pfp.jpg');
    }

    const token = localStorage.getItem('token');
    this.http.post<any>('http://localhost:8000/api/profile/admin', formData, {
      headers: {Authorization: `Bearer ${token}`}
    }).subscribe({
      next: (res) => {
        this.originalData = res.user;
        this.toggleEdit();
      },
      error: (err) => {
        console.error('Error saving admin profile:', err);
      }
    });
  }
}
