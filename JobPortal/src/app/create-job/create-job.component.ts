import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderEmployerComponent } from '../headers/header-employer/header.component';
import { JobService } from '../services/jobs.service';
import { Job, jojo } from '../models/job.model';
import { AuthService } from '../services/auth.service';


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
  imports: [CommonModule, FormsModule, HeaderEmployerComponent]
})
export class CreateJobComponent {

  constructor(private jobService: JobService,private authService: AuthService) {}

  jobData:jojo = {

  
    title: '',
   salary:'',
   category: '',
   employment_type: '',
   description: '',
   skills:'',
   about: '',
   user_id:1 ,
   date:new Date().toISOString().slice(0, 19).replace('T', ' '),


  };

  onSubmit() {

   
    this.jobData.user_id = this.authService.getUserId() ?? 1;
    console.log('Form submitted:', this.jobData);
   
    this.jobService.createJob(this.jobData ).subscribe(
      response => {
        // Handle success
      },
      error => {
        // Handle error
      }
    );
  }
}
