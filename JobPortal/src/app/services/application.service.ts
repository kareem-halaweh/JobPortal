import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApplicationsService {
  private apiUrl =
    'http://localhost:8000/api';
  constructor(private http: HttpClient) {}


  getAllApplications(token: string): Observable<any> {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    };

    return this.http.get<any>(`${this.apiUrl}/applications`, { headers });
  }



}

