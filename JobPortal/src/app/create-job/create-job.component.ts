import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Job, jobAPP } from '../models/job.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/jobs.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit {
  job: Job | null = null;
  selectedFile: File | null = null;
  coverLetter: string = '';
  isLoading: boolean = false;
  error: string | null = null;

  isEditMode: boolean = false;  // <-- NEW
  editableJob: Job | null = null; // <-- NEW

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.loadJob();
  }

  loadJob(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.isLoading = true;
      this.error = null;

      this.jobService.getJobById(Number(jobId)).subscribe({
        next: (job: any) => {
          this.job = job;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error loading job:', error);
          this.error = 'Failed to load job details. Please try again.';
          this.isLoading = false;
        }
      });
    }
  }

  // Edit mode toggling
  toggleEdit(): void {
    if (!this.job) return;

    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      // Clone job data to editable copy
      this.editableJob = { ...this.job };
    } else {
      this.editableJob = null;
    }
  }

  saveChanges(): void {
    if (!this.editableJob) return;

    this.isLoading = true;

    this.jobService.updateJob(this.editableJob.id, this.editableJob).subscribe({
      next: () => {
        alert('Job updated successfully!');
        this.isEditMode = false;
        this.loadJob(); // reload updated data
      },
      error: (error: any) => {
        console.error('Error updating job:', error);
        alert('Failed to update job.');
        this.isLoading = false;
      }
    });
  }

  // Keep your existing file upload logic:
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

  if (!this.job) {
    alert('Job not loaded.');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const base64Resume = reader.result as string;

    const application: jobAPP = {
      job_id: this.job!.id.toString(),
      user_id: this.authService.getUserId(),
      status: 'pending',
      applied_date: new Date(),
      resume: base64Resume,
      cover_letter: this.coverLetter.trim()
    };
    console.log(application);

    this.jobService.apply(application).subscribe({
      next: (response: any) => {
        alert('Application submitted successfully!');
        this.selectedFile = null;
        this.coverLetter = '';
      },
      error: (err: any) => {
        console.error('Error submitting application:', err);
        alert('Failed to submit application.');
      }
    });
  };

  reader.readAsDataURL(this.selectedFile);
}

}