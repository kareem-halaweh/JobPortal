import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  imports:[CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  jobs = [
    {
      title: 'PHP Web Developer',
      company: 'Company Name',
      location: 'Sacramento, California',
      salary: '25,000–35,000',
      appliedDate: '2 days ago'
    },
    {
      title: 'Software Developer',
      company: 'Company Name',
      location: 'Sacramento, California',
      salary: '25,000–35,000',
      appliedDate: '1 week ago'
    },
    {
      title: 'FullStack Developer',
      company: 'Company Name',
      location: 'Sacramento, California',
      salary: '25,000–35,000',
      appliedDate: 'April 5, 2025'
    }
  ];

}