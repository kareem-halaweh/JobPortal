import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobApplied } from '../models/jobApplied.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobAppliedService {
  private apiUrl = 'http://localhost/new-laravel/web2-Data/DataSite/public/api';

  constructor(private http: HttpClient) {}

  getJobApplied(userId: number): Observable<JobApplied[]> {
    return this.http.get<JobApplied[]>(`${this.apiUrl}/users/${userId}/applied-jobs`);
  }



  deleteJobApplied(applicationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/applied-jobs/${applicationId}`);
  }
}

