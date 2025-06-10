import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {

  private apiUrl = 'http://localhost/new-laravel/web2-Data/DataSite/public/api';


  constructor(private http: HttpClient) {}


  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);

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
