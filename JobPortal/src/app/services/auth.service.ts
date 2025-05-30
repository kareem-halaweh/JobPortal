import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

interface ChangePasswordResponse {
  message: string;
  user?: {
    id: number;
    username: string;
    email: string;
    role_id: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  private selectedRole: number | null = null;
  private apiUrl = 'http://localhost/new-laravel/web2-Data/DataSite/public/api';
  private seekerFormData: any = null;
  private employerFormData: any = null;
  sendResetLinkEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-email`, { email });
  }

  resetPassword(email: string, token: string, password: string, passwordConfirmation: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, {
      email,
      token,
      password,
      password_confirmation: passwordConfirmation
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return new Observable(observer => {
        observer.next({ message: 'No token found' });
        observer.complete();
      });
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      })
    );
  }

  changePassword(data: { current_password: string; new_password: string; new_password_confirmation: string }): Observable<ChangePasswordResponse> {
    const token = localStorage.getItem('token');
    const headers = token ? new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }) : undefined;

    return this.http.post<ChangePasswordResponse>(`${this.apiUrl}/change-password`, data, { headers });
  }

  register(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
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
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        return user?.role_id ?? null;
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
        return null;
      }
    }
    return null;
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
