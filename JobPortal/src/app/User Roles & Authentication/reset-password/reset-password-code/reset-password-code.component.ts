import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reset-password-code',
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './reset-password-code.component.html',
  styleUrl: './reset-password-code.component.css'
})
export class ResetPasswordCodeComponent implements OnInit {
  resetPasswordCodeForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.resetPasswordCodeForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }

  // Form submission
  onSubmit(): void {
    this.submitted = true;

    if (this.resetPasswordCodeForm.invalid) {
      return;
    }

    this.router.navigate(['/newPasswordResetPassword']);
  }
}
