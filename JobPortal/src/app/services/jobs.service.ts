import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {
  private apiUrl =
    'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }
}
