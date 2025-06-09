import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost/new-laravel/web2-Data/DataSite/public/api';
  constructor(private http: HttpClient) {}

  getMonthlyReport(month: number, year: number, token: string | null): Observable<any> {
   token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http.get<any>(
      `${this.apiUrl}/admin/monthly-report`,
      {
        params: { month, year },
        headers
      }
    );
  }


}
