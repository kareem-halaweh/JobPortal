import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-create-account-seeker',
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
  seekerFormData: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.seekerFormData = this.authService.getSeekerFormData();
    if (!this.seekerFormData) {
      this.router.navigate(['/signupJobSeeker']);
    }
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    const {newPassword, confirmPassword} = this.accountForm.value;

    if (!newPassword || !confirmPassword) return;

    if (newPassword !== confirmPassword) {
      this.accountForm.get('confirmPassword')?.setErrors({mismatch: true});
      return;
    }


    if (this.accountForm.valid && this.seekerFormData) {
      const combinedData = new FormData();
      combinedData.append('role_id', String(this.authService.getRole() ?? 2));
      combinedData.append('email', this.accountForm.value.email);
      combinedData.append('password', newPassword);
      combinedData.append('password_confirmation', confirmPassword);
      combinedData.append('username', this.seekerFormData.fullName);
      combinedData.append('phone_number', this.seekerFormData.phoneNumber);
      combinedData.append('age', this.seekerFormData.age);
      combinedData.append('gender', this.seekerFormData.gender);
      combinedData.append('specialization', this.seekerFormData.specialization);
      combinedData.append('location', this.seekerFormData.location);
      combinedData.append('about_me', this.seekerFormData.aboutYou);
      if (this.seekerFormData.profile_img) {
        combinedData.append('profile_img', this.seekerFormData.profile_img);
      }

      this.authService.register(combinedData).subscribe({
        next: (response) => {
          console.log('Seeker registered successfully!', response);
          this.router.navigate(['/Seeker']);
        },
        error: (error) => {
          console.error('Registration failed', error);

          if (error.status === 422 && error.error?.errors?.email) {
            const emailErrors = error.error.errors.email.join(', ');
            this.accountForm.get('email')?.setErrors({ backend: emailErrors });
            alert(`Registration failed: ${emailErrors}`);
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
