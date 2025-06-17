import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface ChangePasswordResponse {
  message: string;
  user?: { id: number; username: string; email: string; role_id: number };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly inBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.inBrowser = isPlatformBrowser(platformId);
  }

  private selectedRole: number | null = null;
  private apiUrl =
    'http://localhost:8000/api';

  private seekerFormData: any = null;
  private employerFormData: any = null;

  /* ------------------------------------------------- */

  sendResetLinkEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-email`, { email });
  }

  resetPassword(
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
  ): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/reset-password`,
      {
        email,
        token,
        password,
        password_confirmation: passwordConfirmation
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        if (this.inBrowser) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
    );
  }

  logout(): Observable<any> {
    const token = this.inBrowser ? localStorage.getItem('token') : null;

    if (!token) {
      return new Observable(obs => {
        obs.next({ message: 'No token found' });
        obs.complete();
      });
    }

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        if (this.inBrowser) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      })
    );
  }

  changePassword(data: {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
  }): Observable<ChangePasswordResponse> {
    const token = this.inBrowser ? localStorage.getItem('token') : null;
    const headers = token
      ? new HttpHeaders({
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      })
      : undefined;

    return this.http.post<ChangePasswordResponse>(
      `${this.apiUrl}/change-password`,
      data,
      { headers }
    );
  }

  register(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data).pipe(
      tap(res => {
        if (this.inBrowser) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
    );
  }

  setRole(roleId: number): void {
    this.selectedRole = roleId;
  }
  getRole(): number | null {
    return this.selectedRole;
  }

  getUserRoleId(): number | null {
    if (!this.inBrowser) return null;

    const raw = localStorage.getItem('user');
    if (!raw) return null;

    try {
      const user = JSON.parse(raw);
      return user?.role_id ?? null;
    } catch (e) {
      console.error('Failed to parse user from localStorage', e);
      return null;
    }
  }
  getUserId(): number | null {
    if (!this.inBrowser) return null;

    const raw = localStorage.getItem('user');
    if (!raw) return null;

    try {
      const user = JSON.parse(raw);
      return user?.id ?? null;
    } catch (e) {
      console.error('Failed to parse user from localStorage', e);
      return null;
    }
  }


  setSeekerFormData(data: any) {
    this.seekerFormData = data;
  }
  setEmployerFormData(data: any) {
    this.employerFormData = data;
  }
  getEmployerFormData() {
    return this.employerFormData;
  }
  getSeekerFormData() {
    return this.seekerFormData;
  }
}
