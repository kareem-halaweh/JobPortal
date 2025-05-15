import {Component, OnInit} from '@angular/core';
import {reportedJob} from '../models/reportedjobs.model';
import {reportejobsService} from '../services/reportedjobs.service';
import {FiltersReportedJobsAdminComponent} from './filters-reported-jobs-admin/filters-reported-jobs-admin.component';
import {PaginationReportedJobsAdminComponent}from './pagination-reported-jobs-admin/pagination-reported-jobs-admin.component';
import {TableReportedJobsAdminComponent} from './table-reported-jobs-admin/table-reported-jobs-admin.component';


@Component({
  selector: 'app-reported-jobs-admin',
  imports: [

    FiltersReportedJobsAdminComponent,
    PaginationReportedJobsAdminComponent,
    TableReportedJobsAdminComponent,

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

  constructor(private reportejobsService : reportejobsService) {}

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
        apps.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));        break;
        break;
    }

    this.displayedreportedjobs = apps;
    this.currentPage = 1;
  }

  get paginatedreportedjobs() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.displayedreportedjobs.slice(start, start + this.rowsPerPage);
  }

  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.displayedreportedjobs.length / this.rowsPerPage) }, (_, i) => i + 1);
  }



  SortChange(method: string) {
    this.sortMethod = method;
    this.Filters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
