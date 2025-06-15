import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../services/jobs.service';
import { Job } from '../models/job.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent implements OnInit {
  job: Job = {
    id: 0,
    title: '',
    company: '',
    description: '',
    location: '',
    about: '',
    employment_type: '',
    date: '',
    salary: '',
    skills: '',
    imageUrl: '',
    category: '',
    employer_id: 0,
    user: null
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['id'];
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe({
        next: (job) => {
          this.job = job;
        },
        error: (error) => {
          console.error('Error fetching job:', error);
          // Handle error appropriately
        }
      });
    }
  }

  onSubmit(): void {
    this.jobService.updateJob(this.job.id, this.job).subscribe({
      next: () => {
        // Navigate back to job list or job details
        this.router.navigate(['/jobs']);
      },
      error: (error) => {
        console.error('Error updating job:', error);
        // Handle error appropriately
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/jobs']);
  }
}
