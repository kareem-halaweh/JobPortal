import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-pagination-application',
  standalone: true,
  imports: [

    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './pagination-application.component.html',
})
export class PaginationApplicationComponent {
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

