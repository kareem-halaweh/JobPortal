import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { savedJob } from '../../models/savedjobs.model';
import {savejobsService} from '../../services/savedjobs.service';
import {FiltersFavoriteJobsComponent} from './filters-favorite-jobs/filters-favorite-jobs.component';



@Component({
  selector: 'app-favorite-jobs',
  imports: [
    NgIf,
    NgForOf,
    FiltersFavoriteJobsComponent,
    NgOptimizedImage
  ],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css'
})
export class FavoriteJobsComponent implements OnInit {
  savedJobs: savedJob[] = [];
  filteredJobs: savedJob[] = [];
  filter: string = 'all';

  constructor(private savejobsService: savejobsService) {}

  ngOnInit() {
    this.savedJobs = this.savejobsService.getsavedJob();
    this.Filters();
  }

  Changestatus(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  Filters() {
    let apps = [...this.savedJobs];
    if (this.filter !== 'all') {
      apps = apps.filter(app => app.type === this.filter);
    }
    this.filteredJobs = apps;
  }
  removeJob(jobId: number): void {
    const index = this.savedJobs.findIndex(savedJob => savedJob.id === jobId);
    if (index !== -1) {
      this.filteredJobs= this.savedJobs.splice(index, 1);
    }
    this.Filters();
  }
}
