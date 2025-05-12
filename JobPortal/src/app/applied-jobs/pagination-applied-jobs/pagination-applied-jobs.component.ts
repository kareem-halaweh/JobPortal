import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-pagination-applied-jobs',
  imports: [
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './pagination-applied-jobs.component.html',
  styleUrl: './pagination-applied-jobs.component.css'
})
export class PaginationAppliedJobsComponent {
  @Input() pages: number[]=[];
  @Input() currentPage!: number;
  @Output() pageChanged = new EventEmitter<number>();
  getPageStyle(page: any) {

    return {
      'background-color': page.active ? '#f7b733' : 'transparent',
      'color': page.active ? 'black' : 'black'
    };
  }

  goToPage(page: number) {
    this.pageChanged.emit(page);
  }
}
