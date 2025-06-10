import { Component, Input, OnInit } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { NgForOf } from '@angular/common';

interface TopJob {
  title: string;
  applications_count: number;
}

@Component({
  selector: 'app-chart-admin-report-monthly',
  imports: [ChartComponent, NgForOf],
  templateUrl: './chart-admin-report-monthly.component.html'
})
export class ChartAdminReportMonthlyComponent implements OnInit {
  @Input() applications!: any;
  @Input() jobSeekers!: any;
  @Input() topJobs!: any;

  jobsBar: any = {
    series: [],
    chart: { type: 'bar', height: 300 },
    xaxis: { categories: [] },
    title: { text: 'Daily Job Posts in Current Month' },
    tooltip: { enabled: true },
    colors: ['#1B2A41'],
    dataLabels: { enabled: false },
    plotOptions: { bar: { columnWidth: '40%' } }
  };

  applicationsDonut: any = {
    series: [],
    labels: [],
    colors: [],
    tooltip: { enabled: true }
  };

  jobSeekersDonut: any = {
    series: [],
    labels: [],
    colors: [],
    tooltip: { enabled: true }
  };

  trendingJobs: any[] = [];
  daysInMonth!: number;

  ngOnInit() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    this.daysInMonth = this.getDaysInMonth(month, year);
    this.jobsBar.xaxis.categories = Array.from({ length: this.daysInMonth }, (_, i) => `Day ${i + 1}`);

    if (this.topJobs) {
      this.trendingJobs = this.topJobs.slice(0, 3).map((job: TopJob) => ({
        series: [job.applications_count],
        labels: [job.title],
        tooltip: { enabled: true },
        colors: ['#ffc107']
      }));
    }

    if (this.applications) {
      this.applicationsDonut.series = [
        this.applications.approved,
        this.applications.pending,
        this.applications.rejected
      ];
      this.applicationsDonut.labels = ['Approved', 'Pending', 'Rejected'];
      this.applicationsDonut.colors = ['#1B2A41', '#ffc107', '#e5e7eb'];
    }

    if (this.jobSeekers) {
      this.jobSeekersDonut.series = [
        this.jobSeekers.employed,
        this.jobSeekers.not_employed
      ];
      this.jobSeekersDonut.labels = ['Employed', 'Unemployed'];
      this.jobSeekersDonut.colors = ['#ffc107', '#e5e7eb'];
    }

    this.jobsBar.series = [
      { name: 'Jobs Posted', data: this.generateDailyJobsData(this.daysInMonth) }
    ];
  }

  getDaysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  generateDailyJobsData(days: number): number[] {
    return Array.from({ length: days }, () => Math.floor(Math.random() * 10));
  }
}


















