import { Component } from '@angular/core';
import {ReportedJobComponent} from '../reported-job/reported-job.component';
import {HeaderReportedjobsComponent} from '../header-reportedjobs/header-reportedjobs.component';


@Component({
  selector: 'app-table-roported-jobs',
  imports: [
    ReportedJobComponent,
    HeaderReportedjobsComponent,


  ],
  templateUrl: './table-roported-jobs.component.html',
  styleUrl: './table-roported-jobs.component.css'
})
export class TableRoportedJobsComponent {

}
