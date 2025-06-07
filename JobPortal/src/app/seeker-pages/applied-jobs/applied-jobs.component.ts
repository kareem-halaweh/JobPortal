import { Component, OnInit } from '@angular/core';
import { JobApplied } from '../../models/jobApplied.model';
import { JobAppliedService } from '../../services/appliedjobs.service';
import { AuthService } from '../../services/auth.service';
import { FiltersAppliedJobComponent } from './filters-applied-job/filters-applied-job.component';
import { TableAppliedJobsComponent } from './table-applied-jobs/table-applied-jobs.component';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css'],
  standalone: true,
  imports: [
    FiltersAppliedJobComponent,
    TableAppliedJobsComponent,
    PaginationComponent
  ]
})
export class AppliedJobsComponent implements OnInit {
  jobApplied: JobApplied[] = [];
  displayedApplied: JobApplied[] = [];

  filter: string = 'all';
  sortLabel: string = 'Sort By';
  sortMethod: string = '';
  currentPage: number = 1;
  rowsPerPage: number = 7;
  userId: number | null = null;

  constructor(
    private jobAppliedService: JobAppliedService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId) {
      this.loadAppliedJobs();
    } else {
      console.error('User not logged in or user ID not found.');
    }
  }

  loadAppliedJobs() {
    if (!this.userId) return;

    this.jobAppliedService.getJobApplied(this.userId).subscribe({
      next: (jobs) => {
        this.jobApplied = jobs;
        this.Filters();
      },
      error: (err) => {
        console.error('Failed to load applied jobs:', err);
      }
    });
  }

  Filters() {
    let apps = [...this.jobApplied];
    if (this.filter !== 'all') {
      apps = apps.filter(app => app.status === this.filter);
    }
    switch (this.sortMethod) {
      case 'newest':
        apps.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        apps.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
    }
    this.displayedApplied = apps;
    this.currentPage = 1;
  }

  removeJob(applicationId: number) {
    this.jobAppliedService.deleteJobApplied(applicationId).subscribe({
      next: () => {
        this.jobApplied = this.jobApplied.filter(job => job.id !== applicationId);
        this.Filters();
      },
      error: (err) => {
        console.error('Failed to delete applied job:', err);
      }
    });
  }

  get paginated() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.displayedApplied.slice(start, start + this.rowsPerPage);
  }

  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.displayedApplied.length / this.rowsPerPage) }, (_, i) => i + 1);
  }

  Changestatus(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.sortLabel = method === 'newest' ? 'Newest' : 'Oldest';
    this.Filters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}





