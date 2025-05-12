import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.resetNewPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
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

    this.router.navigate(['/']);
  }
}

