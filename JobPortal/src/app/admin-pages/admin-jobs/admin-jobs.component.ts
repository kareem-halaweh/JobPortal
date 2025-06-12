import { Component, OnInit } from '@angular/core';
import { FiltersAdminJobsComponent } from './filters-admin-jobs/filters-admin-jobs.component';
import { NgForOf } from '@angular/common';
import { CardsAdminJobsComponent } from './cards-admin-jobs/cards-admin-jobs.component';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/jobs.service';
import { SearchBarJobsComponent } from '../../search-bar-jobs/search-bar-jobs.component';

@Component({
  selector: 'app-admin-jobs',
  standalone: true,
  imports: [
    FiltersAdminJobsComponent,
    NgForOf,
    CardsAdminJobsComponent,
    SearchBarJobsComponent
  ],
  templateUrl: './admin-jobs.component.html',
  styleUrls: ['./admin-jobs.component.css']
})
export class AdminJobsComponent implements OnInit {
  jobs: Job[] = [];
  displayedJob: Job[] = [];

  filter: string = 'all';
  sortMethod: string = '';
  sortLabel: string = 'sort By';
  selectedLocation: string = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.displayedJob = [...this.jobs];
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

