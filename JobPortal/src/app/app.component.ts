import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';


import { HeaderComponent } from './header/header.component';
import {LoginComponent} from './User Roles & Authentication/login/login.component';
import {
  ChangePasswordSuccessComponent
} from './User Roles & Authentication/change-password/change-password-success/change-password-success.component';
import {ChangePasswordComponent} from './User Roles & Authentication/change-password/change-password.component';
import {LogoutSuccessComponent} from './User Roles & Authentication/logout/logout-success/logout-success.component';
import {LogoutComponent} from './User Roles & Authentication/logout/logout.component';
import {
  NewPasswordResetPasswordComponent
} from './User Roles & Authentication/reset-password/new-password-reset-password/new-password-reset-password.component';
import {
  ResetPassswordSuccessComponent
} from './User Roles & Authentication/reset-password/reset-passsword-success/reset-passsword-success.component';
import {
  ResetPasswordCodeComponent
} from './User Roles & Authentication/reset-password/reset-password-code/reset-password-code.component';
import {ResetPasswordComponent} from './User Roles & Authentication/reset-password/reset-password.component';
import {
  SignupJobSeekerComponent
} from './User Roles & Authentication/signup/signup-job-seeker/signup-job-seeker.component';
import {SignupComponent} from './User Roles & Authentication/signup/signup.component';
import {SignupEmployerComponent} from './User Roles & Authentication/signup/signup-employer/signup-employer.component';
import {CreateAccountComponent} from './User Roles & Authentication/signup/create-account/create-account.component';
import {FooterComponent} from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterLink, NgIf, RouterOutlet, HeaderComponent, LoginComponent, ChangePasswordSuccessComponent, ChangePasswordComponent, LogoutSuccessComponent, LogoutComponent, NewPasswordResetPasswordComponent, ResetPassswordSuccessComponent, ResetPasswordCodeComponent, ResetPasswordComponent, SignupJobSeekerComponent, SignupComponent, SignupEmployerComponent, CreateAccountComponent, FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobPortal';

  constructor(public router: Router) {}
}
