import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;

    this.http.post<any>('http://127.0.0.1:8000/api/login', formData).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role_id', res.user.role_id);

        const role = res.user.role_id;
        if (role == 1) {
          this.router.navigate(['/Admin']);
        } else if (role == 2) {
          this.router.navigate(['/Seeker']);
        } else if (role == 3) {
          this.router.navigate(['/Employer']);
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials or server error.');
      }
    });
  }
}
