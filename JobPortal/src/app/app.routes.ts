import { Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';
import { CardDetailsComponent } from './find-job/card-details/card-details.component';

export const routes: Routes = [

  {path : 'find-job' , component : FindJobComponent},
  {path : 'job-details' , component : CardDetailsComponent}


];
