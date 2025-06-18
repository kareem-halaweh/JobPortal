import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reportedJob } from '../models/reportedjobs.model';

@Injectable({
  providedIn: 'root'
})
export class reportejobsService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getAllReports(token: string): Observable<reportedJob[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<reportedJob[]>(`${this.baseUrl}/reported`, { headers });
  }


  approveReport(userId: number, jobId: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/report/${userId}/${jobId}/approve`, {}, { headers });
  }

  rejectReport(userId: number, jobId: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/report/${userId}/${jobId}/reject`, {}, { headers });
  }



}

