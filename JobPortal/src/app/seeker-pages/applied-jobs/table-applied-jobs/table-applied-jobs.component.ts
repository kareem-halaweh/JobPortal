import {Component, Input,Output,EventEmitter} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {JobApplied} from '../../../models/jobApplied.model';

@Component({
  selector: 'app-table-applied-jobs',
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './table-applied-jobs.component.html',
  styleUrl: './table-applied-jobs.component.css'
})
export class TableAppliedJobsComponent {
  @Input() displayedApplied: JobApplied[] = [];
  @Output() jobRemoved = new EventEmitter<number>();

  removeJob(jobId: number): void {
    this.jobRemoved.emit(jobId);
  }
}
