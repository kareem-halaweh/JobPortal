import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {Job} from '../models/job.model';
import {JobService} from '../services/jobs.service';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-find-job',
  imports: [CommonModule,CardComponent,SearchBarComponent ],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent implements OnInit {
  @Output() searchChanged = new EventEmitter<{
    term: string;
    option: string;
    category: string;
    type: string;
    salaryRange: string;
  }>();

  jobs: Job[] = [];
  filteredJobsList: Job[] = [];

  searchTerm: string = '';
  selectedOption: string = 'All';
  selectedCategory: string = 'All';
  selectedType: string = 'All';
  selectedSalaryRange: string = 'All';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobs = this.jobService.getJob();
    console.log('Loaded jobs:', this.jobs); // Add this line
    this.filteredJobsList = this.jobs;
  }


  onSearch() {
    this.emitSearch();
  }
  private emitSearch() {
    this.searchChanged.emit({
      term: this.searchTerm,
      option: this.selectedOption,
      category: this.selectedCategory,
      type: this.selectedType,
      salaryRange: this.selectedSalaryRange
    });
  }

  filteredJobs(): Job[] {
    const term = this.searchTerm.toLowerCase();
    const option = this.selectedOption;
    const category = this.selectedCategory;
    const type = this.selectedType;
    const salaryRange = this.selectedSalaryRange;

    return this.jobs.filter(job => {
      // Search term filter
      let matchesTerm = true;
      if (term) {
        switch (option) {
          case 'Title':
            matchesTerm = job.job_title.toLowerCase().includes(term);
            break;
          case 'Company':
            matchesTerm = job.company.toLowerCase().includes(term);
            break;
          case 'Location':
            matchesTerm = job.location.toLowerCase().includes(term);
            break;
          case 'Category':
            matchesTerm = job.category?.toLowerCase().includes(term);
            break;
          case 'Skill':
            matchesTerm = job.skills?.some(skill => skill.toLowerCase().includes(term));
            break;
          case 'All':
          default:
            matchesTerm =
              job.job_title.toLowerCase().includes(term) ||
              job.company.toLowerCase().includes(term) ||
              job.location.toLowerCase().includes(term) ||
              job.category?.toLowerCase().includes(term) ||
              job.skills?.some(skill => skill.toLowerCase().includes(term));
        }
      }


      let matchesCategory = category === 'All' || job.category === category;


      let matchesType = type === 'All' || job.type === type;


      let matchesSalary = true;

      return matchesTerm && matchesCategory && matchesType && matchesSalary;
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
