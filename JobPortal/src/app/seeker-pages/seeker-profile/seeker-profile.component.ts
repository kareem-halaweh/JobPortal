import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-seeker-profile',
  standalone: true,
  imports: [NgIf, FormsModule, NgForOf, RouterLink],
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent {
  isEditMode = false;
  isOwner: boolean =true;
  showUploadModal: boolean = false;

  firstName = 'Ahmad';
  lastName = 'Adham';
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
      this.uploadedFiles.push({ title: this.newFileTitle, file: this.selectedFile });
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
    console.log('Saved profile:', {
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      location: this.location,
      uploadedFiles: this.uploadedFiles
    });
    this.toggleEdit();
  }
}
