import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-filters-applied-job',
  imports: [
    NgClass
  ],
  templateUrl: './filters-applied-job.component.html',
  styleUrl: './filters-applied-job.component.css'
})
export class FiltersAppliedJobComponent {
  @Input() currentFilter: string = 'all';
  @Output() filterChanged = new EventEmitter<string>();
  @Output() sortChanged = new EventEmitter<string>();

  setFilter(filter: string) {
    this.filterChanged.emit(filter.toLowerCase());
  }

  sortBy(method: string) {
    this.sortChanged.emit(method);
  }
}
