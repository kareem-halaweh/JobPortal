import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeekerProfileComponent } from './seeker-pages/seeker-profile/seeker-profile.component';
import { SeekerNotificationsComponent } from './seeker-pages/seeker-notifications/seeker-notifications.component';
import {FavoriteJobsComponent} from './seeker-pages/favorite-jobs/favorite-jobs.component';

import { EmployerProfileComponent } from './employer-pages/employer-profile/employer-profile.component';
import { EmployerNotificationsComponent } from './employer-pages/employer-notifications/employer-notifications.component';
import {EmployerJobsComponent} from './employer-pages/employer-jobs/employer-jobs.component';

import { AdminProfileComponent } from './admin-pages/admin-profile/admin-profile.component';
import { AdminNotificationsComponent } from './admin-pages/admin-notifications/admin-notifications.component';
import {AdminJobsComponent} from './admin-pages/admin-jobs/admin-jobs.component';
import {ReportedJobsAdminComponent} from './admin-pages/reported-jobs-admin/reported-jobs-admin.component';

import { LoginComponent } from './User Roles & Authentication/login/login.component';

import { ChangePasswordComponent } from './User Roles & Authentication/change-password/change-password.component';

import {ResetPasswordComponent} from './User Roles & Authentication/reset-password/reset-password.component';
import { NewPasswordResetPasswordComponent } from './User Roles & Authentication/reset-password/new-password-reset-password/new-password-reset-password.component';


import { SignupComponent } from './User Roles & Authentication/signup/signup.component';
import { SignupJobSeekerComponent } from './User Roles & Authentication/signup/signup-job-seeker/signup-job-seeker.component';
import { SignupEmployerComponent } from './User Roles & Authentication/signup/signup-employer/signup-employer.component';
import { CreateAccountComponent } from './User Roles & Authentication/signup/create-account/create-account.component';


import { LogoutComponent } from './User Roles & Authentication/logout/logout.component';

import { FindJobComponent } from './find-job/find-job.component';
import { CardDetailsComponent } from './find-job/card-details/card-details.component';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import {HomeComponent} from './home/home.component';

import {
  CreateAccountComponentSeeker
} from './User Roles & Authentication/signup/create-account-seeker/create-account.component';
import {RoleGuard} from './auth/role.guard';

import {AppliedJobsComponent} from './seeker-pages/applied-jobs/applied-jobs.component';
import {ApplicationStatusComponent} from './seeker-pages/application-status/application-status.component';

import {CreateJobComponent} from './create-job/create-job.component';



export const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'newPasswordResetPassword', component: NewPasswordResetPasswordComponent },
 { path: 'signup', component: SignupComponent },
  { path: 'signupJobSeeker', component: SignupJobSeekerComponent },
  { path: 'signupEmployer', component: SignupEmployerComponent },
  { path: 'createAccountEmployer', component: CreateAccountComponent },
  { path: 'createAccountSeeker', component: CreateAccountComponentSeeker },
  { path: 'logout', component: LogoutComponent },

  {path: 'create' , component: CreateJobComponent},


  {
    path: 'Seeker',
    component: HomeLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 2 },
    children: [
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'Profile', component: SeekerProfileComponent },
      { path: 'Notifications', component: SeekerNotificationsComponent },
      { path: 'favorite-jobs', component: FavoriteJobsComponent },
      {path: 'applied-jobs', component:AppliedJobsComponent},
      {path: 'application-status', component:ApplicationStatusComponent},
      { path: 'jobs', component: FindJobComponent },
      { path: 'jobs/:id', component: CardDetailsComponent },
    ]
  },
  {
    path: 'Employer',
    component: HomeLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 3 },
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent},
      { path: 'Profile', component: EmployerProfileComponent },


      { path: 'Notifications', component: EmployerNotificationsComponent },
      { path: 'employer-jobs', component: EmployerJobsComponent }

    ]
  },
  {
    path: 'Admin',
    component: HomeLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 1 },
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'Profile', component: AdminProfileComponent},
      {path: 'Notifications', component: AdminNotificationsComponent}
    ]

  },{
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'jobs', component: FindJobComponent },
      { path: 'jobs/:id', component: CardDetailsComponent },

      { path: 'admin-jobs', component: AdminJobsComponent },
      { path: 'reported-jobs-admin', component: ReportedJobsAdminComponent }


    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


