import { Component, OnInit } from '@angular/core';
import { FiltersReportedJobsAdminComponent } from './filters-reported-jobs-admin/filters-reported-jobs-admin.component';
import { TableReportedJobsAdminComponent } from './table-reported-jobs-admin/table-reported-jobs-admin.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { reportedJob } from '../../models/reportedjobs.model';
import { reportejobsService } from '../../services/reportedjobs.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reported-jobs-admin',
  imports: [
    FiltersReportedJobsAdminComponent,
    TableReportedJobsAdminComponent,
    PaginationComponent,
    NgIf
  ],
  templateUrl: './reported-jobs-admin.component.html',
  styleUrls: ['./reported-jobs-admin.component.css']
})
export class ReportedJobsAdminComponent implements OnInit {
  reportedJobs: reportedJob[] = [];
  sortedReportedJobs: reportedJob[] = [];
  paginatedreportedjobs: reportedJob[] = [];
  sortMethod: string = 'newest';
  sortLabel: string = 'Newest';
  currentPage: number = 1;
  rowsPerPage: number = 10;
  successMessage: string = '';

  constructor(private reportJobsService: reportejobsService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports() {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.reportJobsService.getAllReports(token).subscribe({
      next: (reports) => {
        this.reportedJobs = reports;
        this.applySorting();
      },
      error: (err) => {
        console.error('Error fetching reports', err);
      }
    });
  }

  Approve(event: { userId: number; jobId: number }) {
    const token = localStorage.getItem('token') || '';
    this.reportJobsService.approveReport(event.userId, event.jobId, token).subscribe({
      next: () => {
        this.successMessage = 'Report approved successfully!';
        this.loadReports();
        this.clearMessageAfterTimeout();
      },
      error: (err) => {
        console.error('Failed to approve report:', err);
      }
    });
  }

  Reject(event: { userId: number; jobId: number }) {
    const token = localStorage.getItem('token') || '';
    this.reportJobsService.rejectReport(event.userId, event.jobId, token).subscribe({
      next: () => {
        this.successMessage = 'Report rejected successfully!';
        this.loadReports();
        this.clearMessageAfterTimeout();
      },
      error: (err) => {
        console.error('Failed to reject report:', err);
      }
    });
  }

  clearMessageAfterTimeout() {
    setTimeout(() => {
      this.successMessage = '';
    }, 4000);
  }

  SortChange(method: string): void {
    this.sortMethod = method;
    this.sortLabel = method === 'newest' ? 'Newest' : 'Oldest';
    this.applySorting();
  }

  applySorting(): void {
    if (this.sortMethod === 'oldest') {
      this.sortedReportedJobs = [...this.reportedJobs].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else {
      this.sortedReportedJobs = [...this.reportedJobs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    this.currentPage = 1;
    this.updatePaginatedJobs();
  }

  updatePaginatedJobs(): void {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.paginatedreportedjobs = this.sortedReportedJobs.slice(start, end);
  }

  PageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedJobs();
  }

  totalPages(): number[] {
    return Array(Math.ceil(this.reportedJobs.length / this.rowsPerPage))
      .fill(0)
      .map((_, i) => i + 1);
  }
}

