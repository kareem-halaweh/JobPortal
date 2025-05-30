import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signup-job-seeker',
  imports: [

    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './signup-job-seeker.component.html',
  styleUrl: './signup-job-seeker.component.css'
})
export class SignupJobSeekerComponent implements OnInit {
  seekerForm!: FormGroup;
  submitted = false;

  logoPreview: string | ArrayBuffer | null = null;
  selectedLogoFile: File | null = null;

 constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.seekerForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: [''],
      specialization: [''],
      location: ['', Validators.required],
      aboutYou: [''],
      profilePicture: [null]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.seekerForm.markAllAsTouched();
    this.seekerForm.updateValueAndValidity();

    if (this.seekerForm.invalid) return;
    this.authService.setSeekerFormData({
      ...this.seekerForm.value,
    });
    this.router.navigate(['/createAccountSeeker']);
    }

  onLogoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.selectedLogoFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
