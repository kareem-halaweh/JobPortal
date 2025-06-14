import { Injectable } from '@angular/core';
import {savedJob} from '../models/savedjobs.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class savejobsService{
  private apiUrl =
    'http://localhost:8000/api';
  constructor(private http: HttpClient) {}


  getsavedJob(token: string): Observable<savedJob[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<savedJob[]>(this.apiUrl, { headers });
  }






}
