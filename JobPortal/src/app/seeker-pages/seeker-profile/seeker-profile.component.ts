import { Component, OnInit, inject } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seeker-profile',
  standalone: true,
  imports: [NgIf, FormsModule, NgForOf, RouterLink],
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
  private http = inject(HttpClient);

  isEditMode = false;
  isOwner: boolean = true;
  showUploadModal: boolean = false;

  username = 'Username';
  title = 'Engineer';
  email = 'wafaa@example.com';
  phone = '+1234567890';
  gender = 'male';
  age = 30;
  location = 'Nablus';
  dob = '1996-04-10';
  description = 'Passionate about innovation and software engineering.';

  profileImageUrl: string = 'pfp.jpg';

  uploadedFiles: { title: string; file: File }[] = [];
  selectedFile: File | null = null;
  newFileTitle = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token in localStorage');
      return;

    }

    this.http.get<any>('http://127.0.0.1:8000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        const user = res.user;
        const seeker = res.profile;

        this.username = user.username || '';
        this.email = user.email || '';
        this.phone = user.phone_number || '';
        this.location = user.location || '';

        this.gender = seeker?.gender || '';
        this.age = seeker?.age || 0;
        this.description = seeker?.about_you || '';
        this.title = seeker?.specialization || '';

        // If you later support image URLs from backend:
        this.profileImageUrl = 'pfp.jpg';
      },
      error: (err) => {
        console.error('Failed to load profile:', err);
      }
    });
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
    this.selectedFile = null;
    this.newFileTitle = '';
  }

  toggleUploadModal() {
    this.showUploadModal = !this.showUploadModal;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  addFile(): void {
    if (this.selectedFile && this.newFileTitle.trim()) {
      this.uploadedFiles.push({
        title: this.newFileTitle.trim(),
        file: this.selectedFile
      });
      this.selectedFile = null;
      this.newFileTitle = '';
    } else {
      alert('Please select a file and provide a public title.');
    }
  }

  addFileFromModal(): void {
    if (this.selectedFile && this.newFileTitle) {
      this.uploadedFiles.push({title: this.newFileTitle, file: this.selectedFile});
      this.newFileTitle = '';
      this.selectedFile = null;
      this.toggleUploadModal();
    }
  }

  getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }

  onProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = e => this.profileImageUrl = e.target?.result as string;
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveChanges(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    const body = {
      username: this.username,
      email: this.email,
      phone_number: this.phone,
      location: this.location,
      gender: this.gender,
      age: this.age,
      about_me: this.description
    };

    this.http.put('http://127.0.0.1:8000/api/profile/seeker', body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        this.toggleEdit();
      },
      error: (err) => {
        console.error('Failed to update seeker profile:', err);
        this.toggleEdit();
      }
    });
  }
}
