import {Component, OnInit} from '@angular/core';
import {JobApplied} from '../models/jobApplied.model';
import {jobAppliedService} from '../services/appliedjobs.service';
import {FiltersAppliedJobComponent} from './filters-applied-job/filters-applied-job.component';
import {PaginationAppliedJobsComponent} from './pagination-applied-jobs/pagination-applied-jobs.component';
import {TableAppliedJobsComponent} from './table-applied-jobs/table-applied-jobs.component';

@Component({
  selector: 'app-applied-jobs',
  imports: [
    FiltersAppliedJobComponent,
    PaginationAppliedJobsComponent,
    TableAppliedJobsComponent
  ],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.css'
})
export class AppliedJobsComponent implements OnInit{
  JobApplied: JobApplied[] = [];
  displayedApplied: JobApplied[] = [];

  filter: string = 'all';
  sortMethod: string = '';
  currentPage: number = 1;
  rowsPerPage: number = 7;


  constructor(private appService: jobAppliedService) {}

  ngOnInit() {
    this.JobApplied = this.appService.getjobApplied();
    this.Filters();
  }

  Filters() {
    let apps = [...this.JobApplied];
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
  removeJob(jobId: number) {
    const index = this.JobApplied.findIndex(job => job.id === jobId);
    if (index !== -1) {
      this.JobApplied.splice(index, 1);
      this.Filters();
    }}
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
    this.Filters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
