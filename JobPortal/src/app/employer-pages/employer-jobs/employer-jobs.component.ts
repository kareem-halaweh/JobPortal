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
  selectedLocation: string = '';
  searchTerm: string = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
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
        (job.user?.location || job.location || '').toLowerCase() === this.selectedLocation.toLowerCase()
      );
    }

    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      apps = apps.filter(job => {
        const title = (job.title || '').toLowerCase();
        const location = (job.user?.location || job.location || '').toLowerCase();
        return title.includes(search) || location.includes(search);
      });
    }

    if (this.sortMethod === 'newest') {
      apps.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (this.sortMethod === 'oldest') {
      apps.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    this.displayedJob = apps;
  }

  filterByLocation(location: string) {
    this.selectedLocation = location;
    this.Filters();
  }

  onSearchChanged(term: string) {
    this.searchTerm = term;
    this.Filters();
  }


  Changestatus(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.Filters();
  }

}


