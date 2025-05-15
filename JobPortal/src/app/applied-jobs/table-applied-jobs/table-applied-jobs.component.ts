import {Component, Input,Output,EventEmitter} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {JobApplied} from '../../models/jobApplied.model';

@Component({
  selector: 'app-table-applied-jobs',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './table-applied-jobs.component.html',
  styleUrl: './table-applied-jobs.component.css'
})
export class TableAppliedJobsComponent {
  @Input() displayedApplied: JobApplied[] = [];
  @Output() jobRemoved = new EventEmitter<number>();
  getStatus(status: string): string {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'badge-accepted';
      case 'rejected':
        return 'badge-rejected';
      default:
        return 'badge-pending';
    }
  }
  removeJob(jobId: number): void {
    this.jobRemoved.emit(jobId);
  }
}
