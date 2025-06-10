import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}


  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }


  addJob(newJob: Job): Observable<Job> {
    return this.http.post<Job>(`${this.apiUrl}/create`, newJob);
  }


  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${id}`);
  }

 
  updateJob(id: number, updatedJob: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/jobs/${id}`, updatedJob);
  }


  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jobs/${id}`);
  }

  // Search jobs (if you want to use your backend search)
  searchJobs(searchData: any): Observable<Job[]> {
    return this.http.post<Job[]>(`${this.apiUrl}/jobs/search`, searchData);
  }
}
