import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {CardJobsemployeeComponent} from './card-jobsemployee/card-jobsemployee.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-jobs-employee',
  standalone: true,
  imports: [
    NgForOf,
    CardJobsemployeeComponent,
    RouterLink
  ],
  templateUrl: './jobs-employee.component.html',
  styleUrl: './jobs-employee.component.css'
})
export class JobsEmployeeComponent {
  jobs =[
    {
      job_title: "Digital Marketing Executive",
      company: "Smart Marketing Co.",
      location: "Ramallah, Palestine",
      type: "Full Time",
      salary: "$1200 - $2500",
      date:" 1-4-2025",
      imageUrl :'../assets/download.jpeg',
      link:'#'
    },
    {

      job_title: "Frontend Developer",
      company: "Creative Technologies",
      location: "Nablus, Palestine",
      type: "Full Time",
      date: " ",
      salary: "$1200 - $2500",
      imageUrl :'./assets/download.jpeg',
      link:'#'

    }, {

      job_title: "Frontend Developer",
      company: "Creative Technologies",
      location: "Nablus, Palestine",
      type: "Full Time",
      date: " ",
      salary: "$1200 - $2500",
      imageUrl :'./assets/download.jpeg',
      link:'#'

    }, {

      job_title: "Frontend Developer",
      company: "Creative Technologies",
      location: "Nablus, Palestine",
      type: "Full Time",
      date: " ",
      salary: "$1200 - $2500",
      imageUrl :'./assets/download.jpeg',
      link:'#'

    }, {

      job_title: "Frontend Developer",
      company: "Creative Technologies",
      location: "Nablus, Palestine",
      type: "Full Time",
      date: " ",
      salary: "$1200 - $2500",
      imageUrl :'./assets/download.jpeg',
      link:'#'

    }


    ];
}
