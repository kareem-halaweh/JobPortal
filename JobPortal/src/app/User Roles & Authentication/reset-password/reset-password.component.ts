import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private resetPasswordService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.resetPasswordForm.invalid) {
      return;
    }

    const email = this.resetPasswordForm.get('email')!.value;

    this.resetPasswordService.sendResetLinkEmail(email).subscribe({
      next: (response) => {
        this.successMessage = response.message || 'Reset link sent! Please check your email.';

      },
      error: (error) => {
        this.errorMessage = error.error.message || 'Failed to send reset link. Please try again.';
      }
    });
  }
}
