import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {reportedJob} from '../models/reportedjobs.model';
@Injectable({ providedIn: 'root' })
export class reportejobsService{
  private apiUrl = 'http://localhost/new-laravel/web2-Data/DataSite/public/api';
  constructor(private http: HttpClient) {}
  getAllReports(token: string, sort: string) {
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const params: any = {};
    if (sort) {
      params.sort = sort;
    }

    return this.http.get<reportedJob[]>(
      'http://localhost:8000/api/reports',
      { headers, params }
    );
  }


  approveReport(userId: number, jobId: number, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/report-approve/${userId}/${jobId}`, {}, { headers });
  }

  rejectReport(reportId: number, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/report-reject/${reportId}`, {}, { headers });
  }

}
