import {Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Job} from '../../models/job.model';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {JobService} from '../../services/jobs.service';
import {response} from 'express';


@Component({
  selector: 'app-card-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent  implements OnInit {
  jobId: string | null = null;
  job: any; // change to Job if you have an interface

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');

    if (this.jobId) {
      const numericId = Number(this.jobId);
      this.job = this.jobService.getJobById(numericId);
      console.log('Loaded job:', this.job);
    }
  }


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

    alert('Application submitted successfully!');
    this.selectedFile = null;
    this.coverLetter = '';
  }

  protected readonly response = response;
}
