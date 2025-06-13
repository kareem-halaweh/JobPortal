import { Component } from '@angular/core';

import {Router, RouterLink} from '@angular/router';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [


  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  chooseRole(roleId: number) {
    this.authService.setRole(roleId);
    if (roleId === 2) {
      this.router.navigate(['/signupJobSeeker']);
    } else if (roleId === 3) {
      this.router.navigate(['/signupEmployer']);
    }
  }

  constructor(private authService: AuthService, private router: Router) {}

  chooseRole(roleId: number) {
    this.authService.setRole(roleId);
    if (roleId === 2) {
      this.router.navigate(['/signupJobSeeker']);
    } else if (roleId === 3) {
      this.router.navigate(['/signupEmployer']);
    }
  }
}
