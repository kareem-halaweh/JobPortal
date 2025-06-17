import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import { NgIf, NgForOf, NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-employer-profile',
  standalone: true,

  imports: [ReactiveFormsModule, NgIf, NgForOf, NgClass, CommonModule, RouterLink,],

  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {
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
  charCount: number = 0;
  isLoading = false;
  showDeleteModal = false;

  topEmployers = [
    { name: 'Ahmad Yasin', avatar: 'pfp1.jpg' },
    { name: 'Ola Radi', avatar: 'pfp2.jpg' },
    { name: 'Zena Ali', avatar: 'pfp3.jpg' },
    { name: 'Ali Yusuf', avatar: 'pfp4.jpg' },
  ];

  ngOnInit(): void {
    this.isLoading = true;

    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      location: ['', Validators.required],
      industry: ['', Validators.required],
      description: ['', Validators.required],
      founded_date: ['']
    });

    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.get<any>('http://127.0.0.1:8000/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        const user = res.user;
        const profile = res.profile;

        this.profileForm.patchValue({
          username: user?.username || '',
          email: user?.email || '',
          phone_number: user?.phone_number || '',
          location: user?.location || '',
          industry: profile?.industry || '',
          description: profile?.description || '',
          founded_date: profile?.founded_date || ''
        });

        const img = user?.profile_img;

        if (!img || img === 'null' || (typeof img === 'string' && img.trim() === '') || img === 'pfp.jpg') {
          this.profileImageUrl = 'pfp.jpg';
          this.isDefaultPfp = true;
        } else {
          this.profileImageUrl = img;
          this.isDefaultPfp = false;
        }

        this.originalData = this.profileForm.value;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode && this.originalData) {
      this.profileForm.patchValue(this.originalData);
      this.selectedProfileImage = null;
      this.submitted = false;
    }
  }

  onProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.selectedProfileImage = input.files[0];
      const reader = new FileReader();
      reader.onload = e => this.profileImageUrl = e.target?.result as string;
      reader.readAsDataURL(this.selectedProfileImage);
      this.isDefaultPfp = false;
    }
  }

  confirmRemoveImage(): void {
    this.showDeleteModal = false;
    this.removeProfileImage();
  }

  removeProfileImage(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.isLoading = true;

    this.http.post('http://127.0.0.1:8000/api/remove-profile-picture', {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: () => {
        this.profileImageUrl = 'pfp.jpg';
        this.isDefaultPfp = true;
        this.selectedProfileImage = null;
        this.profileForm.patchValue({ profile_img: 'pfp.jpg' });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  saveChanges(): void {
    this.submitted = true;
    if (this.profileForm.invalid) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    this.isLoading = true;

    const formData = new FormData();
    formData.append('username', this.profileForm.value.username);
    formData.append('email', this.profileForm.value.email);
    formData.append('phone_number', this.profileForm.value.phone_number);
    formData.append('location', this.profileForm.value.location);
    formData.append('industry', this.profileForm.value.industry);
    formData.append('description', this.profileForm.value.description);
    formData.append('founded_date', this.profileForm.value.founded_date);

    if (this.selectedProfileImage) {
      formData.append('profile_img', this.selectedProfileImage);
    }

    this.http.post('http://127.0.0.1:8000/api/employer/update', formData, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: () => {
        this.originalData = this.profileForm.value;
        this.toggleEdit();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
