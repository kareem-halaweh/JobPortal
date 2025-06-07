
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
  paginatedApplicants: JobApplication[] = [];

  filter: string = 'all';
  sortMethod: string = 'newest';
  sortLabel: string = 'Newest';
  currentPage: number = 1;
  itemsPerPage: number = 4;
  isLoading: boolean = false;

  constructor(private appService: ApplicationsService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    this.isLoading = true;

    this.appService.getAllApplications(token).subscribe({
      next: (data: JobApplication[]) => {
        this.JobApplication = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch job applications:', error);
        this.isLoading = false;
      }
    });
  }

  Changestatus(filter: string): void {
    this.filter = filter;
    this.applyFilters();
  }

  SortChange(method: string): void {
    this.sortMethod = method;
    this.sortLabel = method === 'newest' ? 'Newest' : 'Oldest';
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.JobApplication;

    if (this.filter !== 'all') {
      filtered = filtered.filter(app => app.status === this.filter);
    }

    filtered.sort((a, b) => {
      return this.sortMethod === 'newest'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    this.paginate(filtered);
  }

  paginate(apps: JobApplication[]): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedApplicants = apps.slice(start, end);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.applyFilters();
  }

  totalPages(): number[] {
    const filteredCount = this.filter === 'all'
      ? this.JobApplication.length
      : this.JobApplication.filter(app => app.status === this.filter).length;

    const totalPages = Math.ceil(filteredCount / this.itemsPerPage); // غيرت هنا
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

}
