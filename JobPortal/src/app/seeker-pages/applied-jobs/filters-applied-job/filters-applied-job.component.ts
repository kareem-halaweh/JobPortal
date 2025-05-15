import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {SortDropdownComponent} from '../../../sort-dropdown/sort-dropdown.component';

@Component({
  selector: 'app-filters-applied-job',
  imports: [
    NgClass,
    SortDropdownComponent
  ],
  templateUrl: './filters-applied-job.component.html',
  standalone: true,
  styleUrl: './filters-applied-job.component.css'
})
export class FiltersAppliedJobComponent {
  @Input() currentFilter: string = 'all';

  @Output() filterChanged = new EventEmitter<string>();
  @Output ()sortChanged = new EventEmitter<string>();
  sortLabel: string = 'Sort By';

  SortChange(option: string) {
    this.sortLabel = option === 'newest' ? 'Newest' : 'Oldest';
    this.sortChanged.emit(option);
  }

  setFilter(filter: string) {
    this.filterChanged.emit(filter.toLowerCase());
  }
}
