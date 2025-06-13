import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../services/jobs.service';
import { Job } from '../models/job.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  searchTerm: string = '';
  selectedJob: Job | null = null;
  isEditing: boolean = false;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (data) => {
        this.jobs = data;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
      }
    });
  }

  searchJobs() {
    if (this.searchTerm.trim()) {
      this.jobService.searchJobs({ query: this.searchTerm }).subscribe({
        next: (data) => {
          this.jobs = data;
        },
        error: (error) => {
          console.error('Error searching jobs:', error);
        }
      });
    } else {
      this.loadJobs();
    }
  }

  editJob(job: Job) {
    this.selectedJob = { ...job };
    this.isEditing = true;
  }

  updateJob() {
    if (this.selectedJob) {
      this.jobService.updateJob(this.selectedJob.id, this.selectedJob).subscribe({
        next: (updatedJob) => {
          const index = this.jobs.findIndex(j => j.id === updatedJob.id);
          if (index !== -1) {
            this.jobs[index] = updatedJob;
          }
          this.isEditing = false;
          this.selectedJob = null;
        },
        error: (error) => {
          console.error('Error updating job:', error);
        }
      });
    }
  }

  deleteJob(id: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(id).subscribe({
        next: () => {
          this.jobs = this.jobs.filter(job => job.id !== id);
        },
        error: (error) => {
          console.error('Error deleting job:', error);
        }
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.selectedJob = null;
  }
}