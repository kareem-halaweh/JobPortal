import {RouterModule, Routes} from '@angular/router';
import { SeekerLayoutComponent } from './seeker-pages/seeker-layout/seeker-layout.component';
import { SeekerProfileComponent } from './seeker-pages/seeker-profile/seeker-profile.component';
import { FindJobComponent } from './find-job/find-job.component';
import { CardDetailsComponent } from './find-job/card-details/card-details.component';
import {LoginComponent} from './User Roles & Authentication/login/login.component';
import { ChangePasswordComponent } from './User Roles & Authentication/change-password/change-password.component';
import {
  ChangePasswordSuccessComponent
} from './User Roles & Authentication/change-password/change-password-success/change-password-success.component';
import {ResetPasswordComponent} from './User Roles & Authentication/reset-password/reset-password.component';
import {
  ResetPasswordCodeComponent
} from './User Roles & Authentication/reset-password/reset-password-code/reset-password-code.component';
import {
  NewPasswordResetPasswordComponent
} from './User Roles & Authentication/reset-password/new-password-reset-password/new-password-reset-password.component';
import {
  ResetPassswordSuccessComponent
} from './User Roles & Authentication/reset-password/reset-passsword-success/reset-passsword-success.component';
import {SignupComponent} from './User Roles & Authentication/signup/signup.component';
import {
  SignupJobSeekerComponent
} from './User Roles & Authentication/signup/signup-job-seeker/signup-job-seeker.component';
import {CreateAccountComponent} from './User Roles & Authentication/signup/create-account/create-account.component';
import {LogoutComponent} from './User Roles & Authentication/logout/logout.component';
import {LogoutSuccessComponent} from './User Roles & Authentication/logout/logout-success/logout-success.component';
import {NgModule} from '@angular/core';
import {SignupEmployerComponent} from './User Roles & Authentication/signup/signup-employer/signup-employer.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [

  {path:'find-job' , component : FindJobComponent},
  {path:'job-details' , component : CardDetailsComponent},
  {path:'login', component:LoginComponent },
  {path:'changePassword', component:ChangePasswordComponent },
  {path:'changePasswordSuccess', component: ChangePasswordSuccessComponent },
  {path:'resetPassword' ,component:ResetPasswordComponent},
  {path:'resetPasswordCode',component:ResetPasswordCodeComponent},
  {path:'newPasswordResetPassword',component:NewPasswordResetPasswordComponent},
  {path:'resetPasswordSuccess',component:ResetPassswordSuccessComponent},
  {path:'signup', component:SignupComponent },
  {path:'signupJobSeeker' ,component:SignupJobSeekerComponent},
  {path:'signupEmployer' ,component:SignupEmployerComponent },
  {path:'createAccount' ,component:CreateAccountComponent},
  {path:'logout' ,component:LogoutComponent},
  {path:'logoutSuccess' ,component:LogoutSuccessComponent},
  {path:'home' ,component: HomeComponent},
  {path:'' ,component: HomeComponent},
    {
    path: 'seeker', component: SeekerLayoutComponent,
    children: [
       { path: 'profile', component: SeekerProfileComponent }
     ,
      // { path: 'applications', component: ApplicationsComponent },
      // { path: 'uploaded-resume', component: UploadedResumeComponent },
      // { path: 'saved-jobs', component: SavedJobsComponent },
      // { path: 'view-applied-jobs', component: ViewAppliedJobsComponent },
      // { path: 'notifications', component: NotificationsComponent }
    ]
  }];

;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})export class AppRoutingModule { }

