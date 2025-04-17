import { Component } from '@angular/core';
import {TableRoportedJobsComponent} from './table-roported-jobs/table-roported-jobs.component';

@Component({
  selector: 'app-reported-jobs',
  imports: [

    TableRoportedJobsComponent
  ],
  templateUrl: './reported-jobs.component.html',
  styleUrl: './reported-jobs.component.css'
})
export class ReportedJobsComponent {

}

export class savedJobsComponent {
}
