import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface JobData {
  title: string;
  company: string;
  location: string;
  description: string;
  responsibilities: string;
  skills: string;
  salary: number;
  benefits: string;
  employmentType: string;
  category: string;
  contactEmail: string;
  companyLogo: string;
}

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CreateJobComponent {
  jobData: JobData = {
    title: '',
    company: '',
    location: '',
    description: '',
    responsibilities: '',
    skills: '',
    salary: 0,
    benefits: '',
    employmentType: '',
    category: '',
    contactEmail: '',
    companyLogo: ''
  };

  onSubmit() {

    console.log('Form submitted:', this.jobData);

    // You can add your API call here to save the job
    // this.jobService.createJob(this.jobData).subscribe(
    //   response => {
    //     // Handle success
    //   },
    //   error => {
    //     // Handle error
    //   }
    // );
  }
}
