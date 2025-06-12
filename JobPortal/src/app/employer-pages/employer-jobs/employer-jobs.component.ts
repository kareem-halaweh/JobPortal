import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CardEmployerJobsComponent } from './card-employer-jobs/card-employer-jobs.component';
import { FilterEmployerJobsComponent } from './filter-employer-jobs/filter-employer-jobs.component';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/jobs.service';
import { SearchBarJobsComponent } from '../../search-bar-jobs/search-bar-jobs.component';

@Component({
  selector: 'app-employer-jobs',
  standalone: true,
  imports: [
    NgForOf,
    CardEmployerJobsComponent,
    FilterEmployerJobsComponent,
    SearchBarJobsComponent
  ],
  templateUrl: './employer-jobs.component.html',
  styleUrls: ['./employer-jobs.component.css']
})
export class EmployerJobsComponent implements OnInit {
  jobs: Job[] = [];
  displayedJob: Job[] = [];

  filter: string = 'all';
  sortMethod: string = '';
  sortLabel: string = 'sort By';
  selectedLocation: string = '';

  constructor(private appService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.appService.getJobs().subscribe({
      next: (data) => {
        this.jobs = data;
        this.Filters();
      },
      error: (err) => {
        console.error('Failed to load jobs:', err);
      }
    });
  }

  Filters() {
    let apps = [...this.jobs];

    if (this.filter !== 'all') {
      apps = apps.filter(job => job.employment_type.toLowerCase() === this.filter.toLowerCase());
    }

    if (this.selectedLocation) {
      apps = apps.filter(job =>
        job.location.toLowerCase() === this.selectedLocation.toLowerCase()
      );
    }

    switch (this.sortMethod) {
      case 'newest':
        apps.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        apps.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
    }

    this.displayedJob = [...apps];
  }

  Changestatus(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.sortLabel = method === 'newest' ? 'newest' : 'oldest';
    this.Filters();
  }

  filterByLocation(location: string) {
    this.selectedLocation = location;
    this.Filters();
  }
}


