import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Job } from '../models/job.model';
import { JobService } from '../services/jobs.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-job',
  standalone: true,
  imports: [CommonModule, CardComponent, SearchBarComponent, FormsModule],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobsList: Job[] = [];
  searchTerm: string = '';
  isEditing: boolean = false;
  selectedJob: Job | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.isLoading = true;
    this.error = null;

    this.jobService.getJobs().subscribe({
      next: (response: any) => {
        console.log(response);
        this.jobs = response.data;
        this.filteredJobsList = this.jobs;
        this.isLoading = false;  // <--- stop loading here
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load jobs';
        this.isLoading = false;  // <--- also stop loading on error
      }
    });
  }


  onSearchChanged(filters: any) {
   /* // Remove empty filter values before sending
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v != null && v !== '')
    );

    this.isLoading = true;
    this.jobService.getJobs(cleanFilters).subscribe({
      next: (jobs) => {
        this.filteredJobsList = jobs;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Search failed', err);
        this.isLoading = false;
      }
    });*/
  }



  onEditJob(job: Job) {
    this.selectedJob = { ...job };
    this.isEditing = true;
  }

  onDeleteJob(jobId: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(jobId).subscribe({
        next: () => {
          this.jobs = this.jobs.filter(job => job.id !== jobId);
          this.filteredJobsList = this.filteredJobsList.filter(job => job.id !== jobId);
        },
        error: (error) => {
          console.error('Error deleting job:', error);
          alert('Failed to delete job. Please try again.');
        }
      });
    }
  }

  updateJob() {
    if (this.selectedJob) {
      this.jobService.updateJob(this.selectedJob.id ?? 0, this.selectedJob).subscribe({
        next: (updatedJob) => {
          const index = this.jobs.findIndex(job => job.id === updatedJob.id);
          if (index !== -1) {
            this.jobs[index] = updatedJob;
            this.filteredJobsList = [...this.jobs];
          }
          this.cancelEdit();
        },
        error: (error) => {
          console.error('Error updating job:', error);
          alert('Failed to update job. Please try again.');
        }
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.selectedJob = null;
  }
}
