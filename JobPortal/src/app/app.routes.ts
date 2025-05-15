import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeekerProfileComponent } from './seeker-pages/seeker-profile/seeker-profile.component';
import { SeekerNotificationsComponent } from './seeker-pages/seeker-notifications/seeker-notifications.component';
import {FavoriteJobsComponent} from './seeker-pages/favorite-jobs/favorite-jobs.component';

import { EmployerProfileComponent } from './employer-pages/employer-profile/employer-profile.component';
import { EmployerNotificationsComponent } from './employer-pages/employer-notifications/employer-notifications.component';

import { AdminProfileComponent } from './admin-pages/admin-profile/admin-profile.component';
import { AdminNotificationsComponent } from './admin-pages/admin-notifications/admin-notifications.component';

import { LoginComponent } from './User Roles & Authentication/login/login.component';
import { ChangePasswordComponent } from './User Roles & Authentication/change-password/change-password.component';
import { ChangePasswordSuccessComponent } from './User Roles & Authentication/change-password/change-password-success/change-password-success.component';
import { ResetPasswordComponent } from './User Roles & Authentication/reset-password/reset-password.component';
import { ResetPasswordCodeComponent } from './User Roles & Authentication/reset-password/reset-password-code/reset-password-code.component';
import { NewPasswordResetPasswordComponent } from './User Roles & Authentication/reset-password/new-password-reset-password/new-password-reset-password.component';
import { ResetPassswordSuccessComponent } from './User Roles & Authentication/reset-password/reset-passsword-success/reset-passsword-success.component';

import { SignupComponent } from './User Roles & Authentication/signup/signup.component';
import { SignupJobSeekerComponent } from './User Roles & Authentication/signup/signup-job-seeker/signup-job-seeker.component';
import { SignupEmployerComponent } from './User Roles & Authentication/signup/signup-employer/signup-employer.component';
import { CreateAccountComponent } from './User Roles & Authentication/signup/create-account/create-account.component';

import { LogoutComponent } from './User Roles & Authentication/logout/logout.component';
import { LogoutSuccessComponent } from './User Roles & Authentication/logout/logout-success/logout-success.component';

import { FindJobComponent } from './find-job/find-job.component';
import { CardDetailsComponent } from './find-job/card-details/card-details.component';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import {HomeComponent} from './home/home.component';
import {AppliedJobsComponent} from './seeker-pages/applied-jobs/applied-jobs.component';
import {ApplicationStatusComponent} from './seeker-pages/application-status/application-status.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Seeker', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'changePasswordSuccess', component: ChangePasswordSuccessComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'resetPasswordCode', component: ResetPasswordCodeComponent },
  { path: 'newPasswordResetPassword', component: NewPasswordResetPasswordComponent },
  { path: 'resetPasswordSuccess', component: ResetPassswordSuccessComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupJobSeeker', component: SignupJobSeekerComponent },
  { path: 'signupEmployer', component: SignupEmployerComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'logoutSuccess', component: LogoutSuccessComponent },

  { path: 'jobs', component: FindJobComponent },
  { path: 'jobs/:id', component: CardDetailsComponent },
  {
    path: 'Seeker',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent}, // This loads on /Seeker
      { path: 'Profile', component: SeekerProfileComponent },
      { path: 'Notifications', component: SeekerNotificationsComponent },
      { path: 'favorite-jobs', component: FavoriteJobsComponent },
      {path: 'applied-jobs', component:AppliedJobsComponent},
      {path: 'application-status', component:ApplicationStatusComponent}
    ]
  },
  {
    path: 'Employer',

    component: HomeLayoutComponent,

    children: [
      { path: '', component: HomeComponent },
      { path: 'Profile', component: EmployerProfileComponent },
      { path: 'Notifications', component: EmployerNotificationsComponent }
    ]
  },
  {
    path: 'Admin',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent}, // This loads on /Admin
      { path: 'Profile', component: AdminProfileComponent },
      { path: 'Notifications', component: AdminNotificationsComponent },
      { path: 'admin-jobs', component: AdminNotificationsComponent }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


