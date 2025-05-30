import { Component, OnInit } from '@angular/core';
//import { Job } from '../models/job.model';
//import { JobService } from '../services/job.service';
import { NgForOf } from '@angular/common';
import { CardEmployerJobsComponent } from './card-employer-jobs/card-employer-jobs.component';
import { FilterEmployerJobsComponent } from './filter-employer-jobs/filter-employer-jobs.component';
import {SearchEmployerJobsComponent} from './search-employer-jobs/search-employer-jobs.component';

@Component({
  selector: 'app-employer-jobs',
  standalone: true,
  imports: [
    NgForOf,
    CardEmployerJobsComponent,
    FilterEmployerJobsComponent,
    SearchEmployerJobsComponent
  ],
  templateUrl: './employer-jobs.component.html',
  styleUrls: ['./employer-jobs.component.css']
})
export class EmployerJobsComponent{/* implements OnInit {
 /* jobs: Job[] = [];
  filter: string = 'All';
  sortMethod: string = '';
  displayedJob:Job[]=[];
  constructor(private jobService:JobService ) {}
  ngOnInit() {
    this.jobs= this.jobService.getJob();
    this.Filters();
  }






  Filters() {
    let apps = [...this.jobs];

    if (this.filter !== 'all') {
      apps = apps.filter(app => app.category === this.filter);
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





  Changecategory(filter: string) {
    this.filter = filter;
    this.Filters();
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.Filters();
  }
*/
}

