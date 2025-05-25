import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [

    RouterLink,
    ReactiveFormsModule,
    NgIf,


  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.changePasswordForm.invalid) return;

    const current_password = this.changePasswordForm.get('currentPassword')?.value;
    const new_password = this.changePasswordForm.get('newPassword')?.value;
    const confirm_password = this.changePasswordForm.get('confirmPassword')?.value;

    if (new_password !== confirm_password) {
      this.changePasswordForm.get('confirmPassword')?.setErrors({mismatch: true});
      return;
    }

    this.authService.changePassword({
      current_password,
      new_password,
      new_password_confirmation: confirm_password,
    }).subscribe({
      next: (response) => {
        alert(response.message || 'Password changed successfully!');

        const user = response.user;
        console.log('User:', user);               // Check if user exists
        console.log('Role ID:', user?.role_id);   // Check role_id value

        switch (user?.role_id) {
          case 1:
            this.router.navigate(['/Admin/home']);
            break;
          case 2:
            this.router.navigate(['/Seeker/home']);
            break;
          case 3:
            this.router.navigate(['/Employer/home']);
            break;

        }
      },
      error: (err) => {
        if (err.status === 403 && err.error.message) {
          alert(err.error.message);
        } else {
          alert('An error occurred. Please try again.');
        }
      }
    });
  }
}
