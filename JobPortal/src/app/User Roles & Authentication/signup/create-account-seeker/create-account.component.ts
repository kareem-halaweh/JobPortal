import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-create-account',
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponentSeeker implements OnInit {
  accountForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    const { newPassword, confirmPassword } = this.accountForm.value;

    if (!newPassword || !confirmPassword) return;

    if (newPassword !== confirmPassword) {
      this.accountForm.get('confirmPassword')?.setErrors({ mismatch: true });
      return;
    }

    if (this.accountForm.valid) {
      this.router.navigate(['/Seeker']);
    }
  }
}
