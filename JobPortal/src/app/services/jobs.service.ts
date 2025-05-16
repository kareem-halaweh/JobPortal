import {Injectable} from '@angular/core';
import {Job} from '../models/job.model';
@Injectable({ providedIn:'root'})
export class JobService {
  private jobs: Job[] = [
    {
      id: 1,
      job_title: "Digital Marketing Executive",
      company: "Smart Marketing Co.",
      location: "Ramallah",
      type: "full time",
      salary: "$1200 - $2500",
      date: "2025-05-11",
      category: "Marketing",
      imageUrl: "download.jpeg"
    },
    {
      id: 2,
      job_title: "Frontend Developer",
      company: "Creative Technologies",
      location: "Nablus",
      type: "full time",
      salary: "$1200 - $2500",
      date: "2025-05-11",
      category: "IT",
      imageUrl: "download.jpeg"
    },
    {
      id: 3,
      job_title: "Graphic Designer",
      company: "Rozza Designs",
      location: "Gaza",
      type: "part time",
      salary: "$800 - $1200",
      date: "2025-05-11",
      category: "Graphic Design",
      imageUrl: "download.jpeg"

    },
    {
      id: 4,
      job_title: "Digital Marketing Specialist",
      company: "Publicis Zoom",
      location: "Ramallah",
      type: "full time",
      salary: "$1300 - $2000",
      date: "2025-05-11",
      category: "Marketing",
      imageUrl: "download.jpeg"


    },
    {
      id: 5,
      job_title: "IT Support Engineer",
      company: "ASAL Technologies",
      location: "Rawabi",
      type: "full time",
      salary: "$1400 - $2200",
      date: "2025-05-11",
      category: "IT",
      imageUrl: "download.jpeg"
    },
    {
      id: 6,
      job_title: "Software Developer",
      company: "Al-Andalus Software Development",
      location: "Ramallah",
      type: "full Time",
      salary: "$1500 - $2500",
      date: "2025-05-11",
      category: "IT",
      imageUrl: "download.jpeg"

    },
    {
      id: 7,
      job_title: "Financial Analyst",
      company: "Bank of Palestine",
      location: "Ramallah",
      type: "full Time",
      salary: "$1800 - $2700",
      date: "2025-05-11",
      category: "Finance",
      imageUrl: "download.jpeg"

    },
    {
      id: 8,
      job_title: "Loan Officer",
      company: "FATEN Microfinance",
      location: "Hebron",
      type: "full time",
      salary: "$1000 - $1600",
      date: "2025-04-11",
      category: "Finance",
      imageUrl: "download.jpeg"

    }
  ];

  getJob(): Job[] {
    return this.jobs;
  };



}
