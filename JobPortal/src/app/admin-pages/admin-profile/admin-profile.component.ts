import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  private http = inject(HttpClient);

  username = '';
  role = 'admin';
  email = '';
  phone = '';
  profileImageUrl = '/pfp.jpg';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.get<any>('http://localhost:8000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        const user = res.user;
        if (user.role_id !== 1) {
          window.location.href = '/';
          return;
        }

        this.username = user.username || '';
        this.email = user.email || '';
        this.phone = user.phone_number || '';
      },
      error: (err) => {
        console.error('Failed to fetch admin profile:', err);
      }
    });
  }
}
