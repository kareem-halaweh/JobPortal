import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-new-password-reset-password',
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './new-password-reset-password.component.html',
  styleUrl: './new-password-reset-password.component.css'
})
export class NewPasswordResetPasswordComponent implements OnInit{

  resetNewPasswordForm!: FormGroup;
  submitted: boolean = false;
  token!: string;
  email!: string;
  password: string = '';


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.token = params['token'];
    this.email = params['email'];
  });
    this.resetNewPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }


  onSubmit(): void {
    this.submitted = true;

    if (this.resetNewPasswordForm.invalid) {
      return;
    }

    const { newPassword, confirmPassword } = this.resetNewPasswordForm.value;

    if (!newPassword || !confirmPassword) return;

    if (newPassword !== confirmPassword) {
      this.resetNewPasswordForm.get('confirmPassword')?.setErrors({ mismatch: true });
      return;
    }

    this.authService.resetPassword(this.email, this.token, newPassword, confirmPassword)
      .subscribe({
        next: response => {
          console.log('Password reset successful!', response);
          this.router.navigate(['/login']);
        },
        error: error => {
          console.error('Password reset failed', error);
        }
      });
  }




}

