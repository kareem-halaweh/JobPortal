import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-table-reported-jobs-admin',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './table-reported-jobs-admin.component.html',
  styleUrl: './table-reported-jobs-admin.component.css'
})
export class TableReportedJobsAdminComponent {
  @Input() displayedreportedjobs: any[] = [];

}
