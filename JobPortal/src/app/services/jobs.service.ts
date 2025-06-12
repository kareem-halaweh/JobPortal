import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Job, jojo } from '../models/job.model';

@Injectable({ providedIn: 'root' })
export class JobService {


  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof Error) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`http://localhost:8000/api/jobs`).pipe(
      catchError(this.handleError)
    );
  }

  createJob(newJob:jojo): Observable<jojo> {
    return this.http.post<jojo>(`http://localhost:8000/api/jobs`, newJob).pipe(
      catchError(this.handleError)
    );
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`http://localhost:8000/api/jobs/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateJob(id: number, updatedJob: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`http://localhost:8000/api/jobs/${id}`, updatedJob).pipe(
      catchError(this.handleError)
    );
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8000/api/jobs/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  searchJobs(params: any): Observable<Job[]> {
    return this.http.get<Job[]>(`http://localhost:8000/api/jobs/search`, { params }).pipe(
      catchError(this.handleError)
    );
  }
}
