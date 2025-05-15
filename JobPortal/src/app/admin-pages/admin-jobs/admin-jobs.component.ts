import {Component, OnInit} from '@angular/core';
import {FiltersAdminJobsComponent} from './filters-admin-jobs/filters-admin-jobs.component';

import {NgForOf} from '@angular/common';
import {CardsAdminJobsComponent} from './cards-admin-jobs/cards-admin-jobs.component';
import {Job} from '../../models/job.model';
import {JobService} from '../../services/jobs.service';



@Component({
  selector: 'app-admin-jobs',
  imports: [
    FiltersAdminJobsComponent,
    NgForOf,
    CardsAdminJobsComponent,


  ],
  templateUrl: './admin-jobs.component.html',
  standalone: true,
  styleUrl: './admin-jobs.component.css'
})
export class AdminJobsComponent implements OnInit{
jobs: Job[] = [];
displayedJob:Job[]=[];

filter: string = 'all';
sortMethod: string = '';
sortLabel:string='sort By';


  constructor(private appService: JobService) {}

  ngOnInit() {
    this.jobs = this.appService. getJob();
    this.Filters();
  }


  Filters() {
    let apps = [...this.jobs];

    if ( this.filter !== 'all') {
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




  Changestatus(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.sortLabel = method === 'newest' ? 'Newest' : 'Oldest';
    this.Filters();
  }





}
