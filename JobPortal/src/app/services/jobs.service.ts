import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { Observable, of } from 'rxjs';


 @Injectable({ providedIn: 'root' })
export class JobService {
  private jobs: Job[] = [{
    id: 1,
  job_title: "Digital Marketing Executive",
  company: "Smart Marketing Co.",
    about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
    responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Ramallah",
  type: "full time",
  salary: "$1200 - $2500",
    skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "Marketing",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/smart-marketing-co",
  linkjob: "/jobs/1"
},
{
  id: 2,
    job_title: "Frontend Developer",
  company: "Creative Technologies",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Nablus",
  type: "full time",
  salary: "$1200 - $2500",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "IT",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/creative-technologies",
  linkjob: "/jobs/2"
},
{
  id: 3,
  job_title: "Graphic Designer",
  company: "Rozza Designs",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Gaza",
  type: "part time",
  salary: "$800 - $1200",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "Graphic Design",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/rozza-designs",
  linkjob: "/jobs/3"
},
{
  id: 4,
    job_title: "Digital Marketing Specialist",
  company: "Publicis Zoom",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Ramallah",
  type: "full time",
  salary: "$1300 - $2000",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "Marketing",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/publicis-zoom",
  linkjob: "/jobs/4"
},
{
  id: 5,
    job_title: "IT Support Engineer",
  company: "ASAL Technologies",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Rawabi",
  type: "full time",
  salary: "$1400 - $2200",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "IT",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/asal-technologies",
  linkjob: "/jobs/5"
},
{
  id: 6,
    job_title: "Software Developer",
  company: "Al-Andalus Software Development",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Ramallah",
  type: "full time",
  salary: "$1500 - $2500",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "IT",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/al-andalus-software-development",
  linkjob: "/jobs/6"
},
{
  id: 7,
    job_title: "Financial Analyst",
  company: "Bank of Palestine",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Ramallah",
  type: "full time",
  salary: "$1800 - $2700",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-05-11",
  category: "Finance",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/bank-of-palestine",
  linkjob: "/jobs/7"
},
{
  id: 8,
    job_title: "Loan Officer",
  company: "FATEN Microfinance",
  about: "asfsfsdfsfsfsfdsfdsssssssssffffffffffffffffffffvvvvvvvvvvvvaafdafsafvcvxdsf",
  responsibilities: ["aaaaaaaaaaaa" , "aaaaaaaaaaaa", "aaaaaaaaaaaa"],
  location: "Hebron",
  type: "full time",
  salary: "$1000 - $1600",
  skills: ["SEO", "Content Marketing", "Google Analytics"],
  date: "2025-04-11",
  category: "Finance",
  imageUrl: "download.jpeg",
  linkcompany: "/companies/faten-microfinance",
  linkjob: "/jobs/8"
}];

getJobs(): Observable<Job[]> {
  return of(this.jobs);
}

  addJob(newJob: Job): void {


    newJob.id = this.jobs.length > 0 ? Math.max(...this.jobs.map(j => j.id)) + 1 : 1;


    this.jobs.push(newJob);


  }

  getJobById(id: number): Job | undefined {


    return this.jobs.find(job => job.id === id);


  }


  updateJob(id: number, updatedJob: Job): void {

    const index = this.jobs.findIndex(job => job.id === id);

    if (index !== -1) {

      this.jobs[index] = { ...updatedJob };

    }

  }
}
