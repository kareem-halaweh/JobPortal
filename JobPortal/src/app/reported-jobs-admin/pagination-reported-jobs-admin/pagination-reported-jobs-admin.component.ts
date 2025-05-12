import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-pagination-reported-jobs-admin',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './pagination-reported-jobs-admin.component.html',
  styleUrls: ['./pagination-reported-jobs-admin.component.css']
})
export class PaginationReportedJobsAdminComponent {
  @Input() pages: number[] = [];
  @Input() currentPage!: number;
  @Output() pageChanged = new EventEmitter<number>();



  goToPage(page: number) {
    this.pageChanged.emit(page);
  }
}
