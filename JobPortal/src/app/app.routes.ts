import { Routes } from '@angular/router';
import { SeekerLayoutComponent } from './seeker-pages/seeker-layout/seeker-layout.component';
import { SeekerProfileComponent } from './seeker-pages/seeker-profile/seeker-profile.component';

// import { ApplicationsComponent } from './seeker-pages/applications/applications.component';
// import { UploadedResumeComponent } from './seeker-pages/uploaded-resume/uploaded-resume.component';
// import { SavedJobsComponent } from './seeker-pages/saved-jobs/saved-jobs.component';
// import { ViewAppliedJobsComponent } from './seeker-pages/view-applied-jobs/view-applied-jobs.component';
// import { NotificationsComponent } from './seeker-pages/notifications/notifications.component';

export const routes: Routes = [
  {
    path: 'seeker',
    component: SeekerLayoutComponent,
    children: [
      { path: '', component: SeekerProfileComponent },
      // { path: 'applications', component: ApplicationsComponent },
      // { path: 'uploaded-resume', component: UploadedResumeComponent },
      // { path: 'saved-jobs', component: SavedJobsComponent },
      // { path: 'view-applied-jobs', component: ViewAppliedJobsComponent },
      // { path: 'notifications', component: NotificationsComponent }
    ]
  }];

  //{
    //path: 'change-password',
    //loadComponent: () =>
      //import('./auth-pages/change-password.component').then((m) => m.ChangePasswordComponent)
  //},
  //{
    //path: 'forgot-password',
    //loadComponent: () =>
      //import('./auth-pages/forgot-password.component').then((m) => m.ForgotPasswordComponent)
  //{
    //path: 'logout',
    //loadComponent: () =>
      //import('./auth-pages/logout.component').then(m => m.LogoutComponent)
  //}

  //},

