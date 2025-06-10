import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Job } from '../models/job.model';
import { JobService } from '../services/jobs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-job',
  imports: [CommonModule, CardComponent, SearchBarComponent],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobsList: Job[] = [];
  searchTerm: string = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
      this.filteredJobsList = this.jobs;
    });
  }

  onSearchChanged(term: string) {
    this.searchTerm = term.toLowerCase();
    this.filteredJobsList = this.jobs.filter(job =>
      job.job_title.toLowerCase().includes(this.searchTerm) ||
      job.company.toLowerCase().includes(this.searchTerm) ||
      job.location.toLowerCase().includes(this.searchTerm) ||
      job.category.toLowerCase().includes(this.searchTerm) ||
      job.skills.some(skill => skill.toLowerCase().includes(this.searchTerm))
    );
  }
}
