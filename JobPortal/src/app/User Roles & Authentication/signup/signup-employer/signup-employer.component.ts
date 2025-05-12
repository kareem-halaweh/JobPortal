import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-signup-employer',
  imports: [

    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './signup-employer.component.html',
  styleUrl: './signup-employer.component.css'
})
export class SignupEmployerComponent  implements OnInit {
  employerForm!: FormGroup;
  submitted = false;

  logoPreview: string | ArrayBuffer | null = null;
  selectedLogoFile: File | null = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.employerForm = this.fb.group({
      companyName: ['', Validators.required],
      foundedDate: [''],
      companyLogo: [''],
      companyIndustry: ['', Validators.required],
      location: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      description: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.employerForm.markAllAsTouched();
    this.employerForm.updateValueAndValidity();

    if (this.employerForm.invalid) return;

    this.router.navigate(['/createAccount']);
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
