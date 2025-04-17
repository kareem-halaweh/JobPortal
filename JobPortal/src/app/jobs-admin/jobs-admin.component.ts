import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {CardJobComponent} from './card-job/card-job.component';

@Component({
  selector: 'app-jobs-admin',
  imports: [

    NgForOf,
    CardJobComponent
  ],
  templateUrl: './jobs-admin.component.html',
  styleUrl: './jobs-admin.component.css'
})
export class JobsAdminComponent {
  jobs =[
    {
      id:1,
      job_title: "Digital Marketing Executive",
      company: "Smart Marketing Co.",
      location: "Ramallah, Palestine",
      type: "Full Time",
      salary: "$1200 - $2500",
      date:"",
      imageUrl :'assets/download.jpeg'
    },
    {
      id:1,
      job_title: "Frontend Developer",
      company: "Creative Technologies",
      location: "Nablus, Palestine",
      type: "Full Time",
      date: " ",
      salary: "$1200 - $2500",
      imageUrl :'assets/download.jpeg'

    }];
};
