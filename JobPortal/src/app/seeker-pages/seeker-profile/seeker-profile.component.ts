import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgForOf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-seeker-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgForOf, FormsModule, NgClass, RouterLink],
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  profileForm!: FormGroup;
  isEditMode = false;
  isOwner = false;
  submitted = false;

  userId: number | null = null;
  profileImageUrl: string = 'pfp.jpg';
  selectedProfileImage: File | null = null;
  isDefaultPfp = true;

  uploadedFiles: { title: string; url: string }[] = [];
  selectedFile: File | null = null;
  newFileTitle: string = '';
  showUploadModal = false;
  originalProfileData: any;

  showDeleteModal = false;
  fileIndexToDelete: number | null = null;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.get<any>('http://127.0.0.1:8000/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        const user = res.user;
        const profile = res.profile;
        this.userId = user?.id ?? null;
        this.isOwner = true;

        const dropboxUrl = user?.profile_img ?? '';
        if (dropboxUrl.includes('dropbox.com/scl')) {
          this.profileImageUrl = dropboxUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
          this.isDefaultPfp = false;
        } else {
          this.profileImageUrl = dropboxUrl || 'pfp.jpg';
          this.isDefaultPfp = !dropboxUrl;
        }

        if (profile?.resume && profile?.cv_title) {
          this.uploadedFiles = [{ title: profile.cv_title, url: profile.resume }];
        }

        this.profileForm = this.fb.group({
          username: [user?.username ?? '', Validators.required],
          email: [user?.email ?? '', [Validators.required, Validators.email]],
          phone: [user?.phone_number ?? '', [Validators.required, Validators.minLength(10)]],
          location: [user?.location ?? '', Validators.required],
          gender: [profile?.gender ?? '', Validators.required],
          age: [profile?.age ?? '', [Validators.required, Validators.min(18)]],
          specialization: [profile?.specialization ?? '', Validators.required],
          aboutMe: [profile?.about_me ?? '']
        });

        this.originalProfileData = { ...this.profileForm.value };
      }
    });
  }

  toggleEdit(): void {
    if (this.isEditMode) {
      this.profileForm.patchValue({ ...this.originalProfileData });
    }
    this.isEditMode = !this.isEditMode;
    this.submitted = false;
  }

  onProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.profileImageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
      this.selectedProfileImage = input.files[0];
      this.isDefaultPfp = false;
    }
  }

  removeProfileImage(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.post('http://127.0.0.1:8000/api/seeker/remove-profile-picture', {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: () => {
        this.profileImageUrl = 'pfp.jpg';
        this.selectedProfileImage = null;
        this.isDefaultPfp = true;
      }
    });
  }

  saveChanges(): void {
    this.submitted = true;
    if (this.profileForm.invalid) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    const headers = { Authorization: `Bearer ${token}` };
    const formValues = this.profileForm.value;
    const data = {
      username: String(formValues.username),
      email: String(formValues.email),
      phone_number: String(formValues.phone),
      location: String(formValues.location),
      gender: String(formValues.gender),
      age: String(formValues.age),
      specialization: String(formValues.specialization),
      about_me: String(formValues.aboutMe)
    };

    if (this.selectedProfileImage) {
      const formData = new FormData();
      formData.append('image', this.selectedProfileImage);

      this.http.post<{ url: string }>(
        'http://127.0.0.1:8000/api/upload-profile-picture',
        formData,
        { headers }
      ).subscribe({
        next: (res) => {
          const dropboxUrl = res.url ?? '';
          this.profileImageUrl = dropboxUrl.includes('dropbox.com/scl')
            ? dropboxUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '')
            : dropboxUrl;

          this.isDefaultPfp = false;
          this.sendProfileUpdate(data, headers);
        }
      });
    } else {
      this.sendProfileUpdate(data, headers);
    }
  }

  private sendProfileUpdate(body: any, headers: any): void {
    this.http.put('http://127.0.0.1:8000/api/seeker/update', body, { headers }).subscribe({
      next: () => {
        this.originalProfileData = { ...this.profileForm.value };
        this.isEditMode = false;
      }
    });
  }

  openUploadModal(): void {
    this.showUploadModal = true;
  }

  closeUploadModal(): void {
    this.showUploadModal = false;
    this.selectedFile = null;
    this.newFileTitle = '';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile(): void {
    if (!this.selectedFile || !this.newFileTitle.trim()) return;

    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('title', this.newFileTitle);

    this.http.post<any>('http://127.0.0.1:8000/api/seeker/upload-cv', formData, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        this.uploadedFiles = [{ title: res.cv_title, url: res.resume }];
        this.showUploadModal = false;
        this.selectedFile = null;
        this.newFileTitle = '';
      }
    });
  }

  requestFileDelete(index: number): void {
    this.fileIndexToDelete = index;
    this.showDeleteModal = true;
  }

  cancelDelete(): void {
    this.fileIndexToDelete = null;
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    if (this.fileIndexToDelete !== null) {
      const token = localStorage.getItem('token');
      if (!token) return;

      this.http.delete('http://127.0.0.1:8000/api/seeker/delete-cv', {
        headers: { Authorization: `Bearer ${token}` }
      }).subscribe({
        next: () => {
          this.uploadedFiles.splice(this.fileIndexToDelete!, 1);
          this.fileIndexToDelete = null;
          this.showDeleteModal = false;
        }
      });
    }
  }
  getFileUrl(url: string): string {
    return url
      .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
      .replace('?dl=0', '');
  }

}
