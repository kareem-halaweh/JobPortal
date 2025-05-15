
import { Component, OnInit } from '@angular/core';

import { TableApplicationComponent } from './table-application/table-application.component';
import { FiltersApplicationComponent } from './filters-application/filters-application.component';
import { JobApplication } from '../../models/application.model';
import {ApplicationsService} from '../../services/application.service';
import {PaginationComponent} from '../../pagination/pagination.component';




@Component({
  selector: 'app-application-status',
  standalone: true,
  imports:[
    TableApplicationComponent,
    FiltersApplicationComponent,
    PaginationComponent],
  templateUrl: './application-status.component.html',
  styleUrl: './application-status.component.css'
})
export class ApplicationStatusComponent implements OnInit {
  JobApplication: JobApplication[] = [];
  displayedApplications: JobApplication[] = [];

  filter: string = 'all';
  sortMethod: string = '';
  sortLabel: string = 'Sort By';

  currentPage: number = 1;
  rowsPerPage: number = 7;

  constructor(private appService: ApplicationsService) {}

  ngOnInit() {
    this.JobApplication = this.appService.getApplications();
    this.Filters();
  }

  Filters() {
    let apps = [...this.JobApplication];

    if ( this.filter !== 'all') {
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

    this.displayedApplications = apps;
    this.currentPage = 1;
  }

  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.displayedApplications.length / this.rowsPerPage) }, (_, i) => i + 1);
  }

  get paginatedApplicants() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.displayedApplications.slice(start, start + this.rowsPerPage);
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
