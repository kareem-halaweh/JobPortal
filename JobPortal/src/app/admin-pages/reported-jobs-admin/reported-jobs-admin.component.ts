import {Component, OnInit} from '@angular/core';

import {FiltersReportedJobsAdminComponent} from './filters-reported-jobs-admin/filters-reported-jobs-admin.component';
import {TableReportedJobsAdminComponent} from './table-reported-jobs-admin/table-reported-jobs-admin.component';
import {PaginationComponent} from '../../pagination/pagination.component';
import {reportedJob} from '../../models/reportedjobs.model';
import {reportejobsService} from '../../services/reportedjobs.service';



@Component({
  selector: 'app-reported-jobs-admin',
  imports: [

    FiltersReportedJobsAdminComponent,
    TableReportedJobsAdminComponent,
    PaginationComponent

  ],
  templateUrl: './reported-jobs-admin.component.html',
  styleUrl: './reported-jobs-admin.component.css'
})
export class ReportedJobsAdminComponent implements OnInit  {
  reportedJobs: reportedJob[] = [];
  displayedreportedjobs: reportedJob[] = [];

  filter: string = 'all';
  currentPage: number = 1;
  rowsPerPage: number = 7;
  sortMethod: string = '';
  sortLabel: string = 'Sort By';

  constructor(private reportejobsService: reportejobsService) {}

  ngOnInit() {
    this.reportedJobs = this.reportejobsService.getreportedJob();
    this.Filters();
  }

  Filters() {
    let apps = [...this.reportedJobs];

    switch (this.sortMethod) {
      case 'newest':
        apps.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        apps.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
    }

    this.displayedreportedjobs = apps;
    this.currentPage = 1;
  }

  SortChange(method: string) {
    this.sortMethod = method;
    this.sortLabel = method === 'newest' ? 'Newest' : 'Oldest';
    console.log('Sorting by:', method);
    this.Filters();
  }

  get paginatedreportedjobs() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.displayedreportedjobs.slice(start, start + this.rowsPerPage);
  }

  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.displayedreportedjobs.length / this.rowsPerPage) }, (_, i) => i + 1);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
