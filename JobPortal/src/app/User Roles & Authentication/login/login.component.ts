import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const loginData = this.loginForm.value;
    this.authService.login(loginData).subscribe({
      next: (response) => {
        const user = response.user;
        localStorage.setItem('user', JSON.stringify(user));

        switch (user.role_id) {
          case 1: this.router.navigate(['/Admin']); break;
          case 2: this.router.navigate(['/Seeker']); break;
          case 3: this.router.navigate(['/Employer']); break;
          default: this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        if (err.status === 401) {
          this.errorMessage = 'Invalid email or password.';
          alert('Incorrect email or password. Please try again.');
        } else if (err.status === 0) {
          this.errorMessage = 'Cannot reach the server. Please check your connection.';
        } else {
          this.errorMessage = `Login failed: ${err.message}`;
        }  }
    });
  }
}
