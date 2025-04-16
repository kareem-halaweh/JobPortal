import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card-details',
  imports: [FormsModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {

  selectedFile: File | null = null;
  coverLetter: string = '';

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  submitApplication() {
    if (!this.selectedFile || !this.coverLetter.trim()) {
      alert('Please upload a PDF and enter a cover letter.');
      return;
    }

    console.log('Resume:', this.selectedFile);
    console.log('Cover Letter:', this.coverLetter);

    // Here, you’d normally send the data to a server
    alert('Application submitted successfully!');

    // Optionally reset form
    this.selectedFile = null;
    this.coverLetter = '';
    // Close modal manually if needed
  }

}
