import {Component, OnInit} from '@angular/core';
import {CardAdminReportMonthlyComponent} from './card-admin-report-monthly/card-admin-report-monthly.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {HeaderAdminReportMonthlyComponent} from './header-admin-report-monthly/header-admin-report-monthly.component';
import {ReportService} from '../../services/report.service';
import {ChartAdminReportMonthlyComponent} from './chart-admin-report-monthly/chart-admin-report-monthly.component';

@Component({
  selector: 'app-admin-report-monthly',
  imports: [

    CardAdminReportMonthlyComponent,
    NgApexchartsModule,

    HeaderAdminReportMonthlyComponent,
    ChartAdminReportMonthlyComponent
  ],
  templateUrl: './admin-report-monthly.component.html',
  styleUrl: './admin-report-monthly.component.css'
})
export class AdminReportMonthlyComponent implements OnInit {
  applicationsStatus: any;
  jobSeekers: any;
  topAppliedJobs: any;
  summaryCards: any;
  jobSeekersStatus: any;
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  OnInit(): void {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const token = localStorage.getItem('token') ;

    this.reportService.getMonthlyReport(month, year, token).subscribe({
      next: (res) => {
        this.summaryCards = res.summary_cards;
        this.applicationsStatus = res.applications_status;
        this.jobSeekers = res.job_seekers_status;
        this.topAppliedJobs = res.top_applied_jobs;
      },
      error: (err) => console.error('Error loading report:', err)
    });
  }
}
