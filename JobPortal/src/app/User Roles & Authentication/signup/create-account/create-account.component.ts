import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-create-account-employer',
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {
  accountForm!: FormGroup;
  submitted = false;
  employerFormData: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.employerFormData = this.authService.getEmployerFormData();

    if (!this.employerFormData) {
      this.router.navigate(['/signupEmployer']);
    }
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
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

    if (this.accountForm.valid && this.employerFormData) {
      const combinedData = new FormData();
      combinedData.append('role_id', String(this.authService.getRole() ?? 3));
      combinedData.append('email', this.accountForm.value.email);
      combinedData.append('password', newPassword);
      combinedData.append('password_confirmation', confirmPassword);
      combinedData.append('username', this.employerFormData.companyName);
      combinedData.append('founded_date', this.employerFormData.foundedDate ?? '');
      if (this.employerFormData.profile_img) {
        combinedData.append('profile_img', this.employerFormData.profile_img);
      }
      combinedData.append('industry', this.employerFormData.companyIndustry);
      combinedData.append('location', this.employerFormData.location);
      combinedData.append('phone_number', this.employerFormData.phoneNumber);
      combinedData.append('description', this.employerFormData.description ?? '');

      this.authService.register(combinedData).subscribe({
        next: (response) => {
          console.log('Employer registered successfully!', response);
          console.log('Registered user:', response.user);
          console.log('User in localStorage:', localStorage.getItem('user'));

          this.router.navigate(['/Employer']);
        },

        error: (error) => {
          if (error.status === 422 && error.error?.errors?.email) {
            alert('This email is already registered and cannot be used again.');
          } else {
            alert('Registration failed: ' + (error.error?.message || 'Unknown error'));
          }
        }
      });
    } else {
      console.log('Invalid form data.');
    }
  }
}
