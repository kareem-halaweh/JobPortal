import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import { NgIf, NgForOf, NgClass } from '@angular/common';

@Component({
  selector: 'app-seeker-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgForOf, NgClass, FormsModule, RouterLink],
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  profileForm!: FormGroup;
  isEditMode = false;
  isOwner = true;
  submitted = false;
  showImageDeleteModal = false;

  profileImageUrl = 'pfp.jpg';
  selectedProfileImage: File | null = null;
  isDefaultPfp = true;
  originalData: any;

  uploadedFiles: { title: string; url: string }[] = [];
  newFileTitle: string = '';
  selectedFile: File | null = null;

  showUploadModal = false;
  showDeleteModal = false;
  fileIndexToDelete: number | null = null;

  isLoading = false;
  toastMessage = '';

  ngOnInit() {
    this.isLoading = true;
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.get<any>('http://127.0.0.1:8000/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        const user = res.user;
        const profile = res.profile;

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
          phone_number: [user?.phone_number ?? '', [Validators.required, Validators.minLength(10)]],
          location: [user?.location ?? '', Validators.required],
          gender: [profile?.gender ?? '', Validators.required],
          age: [profile?.age ?? '', [Validators.required, Validators.min(18)]],
          specialization: [profile?.specialization ?? '', Validators.required],
          aboutMe: [profile?.about_me ?? ''],
        });

        this.originalData = { ...this.profileForm.value };
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toastMessage = 'Failed to load profile.';
        setTimeout(() => this.toastMessage = '', 3000);
      }
    });
  }

  toggleEdit() {
    if (this.isEditMode) {
      this.profileForm.patchValue({ ...this.originalData });
    } else {
      this.originalData = { ...this.profileForm.value };
    }
    this.isEditMode = !this.isEditMode;
    this.submitted = false;
  }

  onProfileImageChange(event: Event) {
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

  removeProfileImage() {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.isLoading = true;

    this.http.post('http://127.0.0.1:8000/api/remove-profile-picture', {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: () => {
        this.profileImageUrl = 'pfp.jpg';
        this.selectedProfileImage = null;
        this.isDefaultPfp = true;
        this.toastMessage = 'Profile image removed.';
        this.isLoading = false;
        setTimeout(() => this.toastMessage = '', 3000);
      },
      error: () => {
        this.toastMessage = 'Failed to remove image.';
        this.isLoading = false;
        setTimeout(() => this.toastMessage = '', 3000);
      }
    });
  }

  saveChanges() {
    this.submitted = true;
    if (this.profileForm.invalid) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    const headers = { Authorization: `Bearer ${token}` };
    const formValues = this.profileForm.value;
    const genderRaw = String(formValues.gender).trim();
    const capitalizedGender = genderRaw.charAt(0).toUpperCase() + genderRaw.slice(1).toLowerCase();
    const data = {
      username: String(formValues.username),
      email: String(formValues.email),
      phone_number: String(formValues.phone_number),
      location: String(formValues.location),
      gender: capitalizedGender,
      age: String(formValues.age),
      specialization: String(formValues.specialization),
      about_me: String(formValues.aboutMe),
      industry: String(formValues.industry)
    };

    this.isLoading = true;

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
        },
        error: () => {
          this.toastMessage = 'Image upload failed.';
          this.isLoading = false;
          setTimeout(() => this.toastMessage = '', 3000);
        }
      });
    } else {
      this.sendProfileUpdate(data, headers);
    }
  }

  private sendProfileUpdate(body: any, headers: any) {
    this.http.put('http://127.0.0.1:8000/api/seeker/update', body, { headers }).subscribe({
      next: () => {
        this.originalData = { ...this.profileForm.value };
        this.isEditMode = false;
        this.isLoading = false;
        this.toastMessage = 'Changes saved successfully.';
        setTimeout(() => this.toastMessage = '', 3000);
      },
      error: () => {
        this.toastMessage = 'Failed to save changes.';
        this.isLoading = false;
        setTimeout(() => this.toastMessage = '', 3000);
      }
    });
  }

  openUploadModal() {
    this.showUploadModal = true;
    this.newFileTitle = '';
    this.selectedFile = null;
  }

  closeUploadModal() {
    this.showUploadModal = false;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile() {
    if (!this.selectedFile || !this.newFileTitle.trim()) return;

    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('title', this.newFileTitle);

    this.isLoading = true;

    this.http.post<any>('http://127.0.0.1:8000/api/seeker/upload-cv', formData, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        this.uploadedFiles = [{ title: res.cv_title, url: res.resume }];
        this.closeUploadModal();
        this.toastMessage = 'File uploaded.';
        this.isLoading = false;
        setTimeout(() => this.toastMessage = '', 3000);
      },
      error: () => {
        this.toastMessage = 'Failed to upload file.';
        this.isLoading = false;
        setTimeout(() => this.toastMessage = '', 3000);
      }
    });
  }

  requestFileDelete(index: number) {
    this.fileIndexToDelete = index;
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.fileIndexToDelete = null;
    this.showDeleteModal = false;
  }

  confirmDelete() {
    if (this.fileIndexToDelete !== null) {
      const token = localStorage.getItem('token');
      if (!token) return;

      this.isLoading = true;

      this.http.delete('http://127.0.0.1:8000/api/seeker/delete-cv', {
        headers: { Authorization: `Bearer ${token}` }
      }).subscribe({
        next: () => {
          this.uploadedFiles.splice(this.fileIndexToDelete!, 1);
          this.fileIndexToDelete = null;
          this.showDeleteModal = false;
          this.toastMessage = 'File deleted.';
          this.isLoading = false;
          setTimeout(() => this.toastMessage = '', 3000);
        },
        error: () => {
          this.toastMessage = 'Failed to delete file.';
          this.isLoading = false;
          setTimeout(() => this.toastMessage = '', 3000);
        }
      });
    }
  }

  getFileUrl(url: string): string {
    return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
  }
}
