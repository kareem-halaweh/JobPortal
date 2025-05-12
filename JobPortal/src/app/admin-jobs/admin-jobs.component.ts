import {Component, OnInit} from '@angular/core';
import {FiltersAdminJobsComponent} from './filters-admin-jobs/filters-admin-jobs.component';
import {Job} from '../models/job.model';
import {JobService} from '../services/job.service';
import {NgForOf} from '@angular/common';
import {CardsAdminJobsComponent} from './cards-admin-jobs/cards-admin-jobs.component';
import {SearchEmployerJobsComponent} from '../employer-jobs/search-employer-jobs/search-employer-jobs.component';



@Component({
  selector: 'app-admin-jobs',
  imports: [
    FiltersAdminJobsComponent,
    NgForOf,
    CardsAdminJobsComponent,
    SearchEmployerJobsComponent
  ],
  templateUrl: './admin-jobs.component.html',
  styleUrl: './admin-jobs.component.css'
})
export class AdminJobsComponent implements OnInit{
jobs: Job[] = [];
displayedJob:Job[]=[];
  filter: string = 'all';
  sortMethod: string = '';



  constructor(private appService: JobService) {}

  ngOnInit() {
    this.jobs = this.appService. getJob();
    this.Filters();
  }

  Filters() {
    let apps = [...this.jobs];

    if (this.filter !== 'all') {
      apps = apps.filter(app => app.type === this.filter);
    }

    switch (this.sortMethod) {
      case 'newest':
        apps.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        apps.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
    }

    this.displayedJob = apps;

  }



  Changetype(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.Filters();
  }



}
