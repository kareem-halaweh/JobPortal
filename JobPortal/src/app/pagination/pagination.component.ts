import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-pagination',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './pagination.component.html',
  standalone: true,
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
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
