import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-pagination-application',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './pagination-application.component.html',
})
export class PaginationApplicationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number[] = [];

  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    this.pageChange.emit(page);
  }

  goToPrevious() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  goToNext() {
    if (this.currentPage < this.totalPages.length) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}

