import {Component, OnInit} from '@angular/core';
import {FiltersAdminJobsComponent} from './filters-admin-jobs/filters-admin-jobs.component';

import {NgForOf} from '@angular/common';
import {CardsAdminJobsComponent} from './cards-admin-jobs/cards-admin-jobs.component';
import {Job} from '../../models/job.model';
import {JobService} from '../../services/jobs.service';
import {SearchBarJobsComponent} from '../../search-bar-jobs/search-bar-jobs.component';





@Component({
  selector: 'app-admin-jobs',
  imports: [
    FiltersAdminJobsComponent,
    NgForOf,
    CardsAdminJobsComponent,


    SearchBarJobsComponent,


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
selectedLocation: string = '';


  constructor(private appService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }
  loadJobs() {

      this.jobs = this.appService.getJob();
      this.displayedJob = [...this.jobs];
    this.Filters();
    }


  Filters() {
    let apps = [...this.jobs];

    apps = this.filter === 'all' ? apps : apps.filter(job => job.type === this.filter);
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
    this.displayedJob =[...apps];

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
