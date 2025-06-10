import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgForOf, NgOptimizedImage} from "@angular/common";

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
  @Output() approve = new EventEmitter<{ userId: number; jobId: number }>();
  @Output() reject = new EventEmitter<{ userId: number; jobId: number }>();

  onApprove(userId: number, jobId: number) {
    this.approve.emit({ userId, jobId });
  }

  onReject(userId: number, jobId: number) {
    this.reject.emit({ userId, jobId });
  }

}
