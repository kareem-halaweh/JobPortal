import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-change-password',
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

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
    });
  }


  onSubmit(): void {
    this.submitted = true;

    const { newPassword, confirmPassword } = this.changePasswordForm.value;

    if (!newPassword || !confirmPassword) return;

  if (newPassword !== confirmPassword) {
    this.changePasswordForm.get('confirmPassword')?.setErrors({ mismatch: true });
    return;
  }

  if (this.changePasswordForm.valid) {
    console.log('Password changed successfully!');
    this.router.navigate(['/account']);
  }
}
}

