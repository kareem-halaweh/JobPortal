import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-table-reported-jobs-admin',
  imports: [
    NgForOf
  ],
  templateUrl: './table-reported-jobs-admin.component.html',
  styleUrl: './table-reported-jobs-admin.component.css'
})
export class TableReportedJobsAdminComponent {
  @Input() displayedreportedjobs: any[] = [];

}
