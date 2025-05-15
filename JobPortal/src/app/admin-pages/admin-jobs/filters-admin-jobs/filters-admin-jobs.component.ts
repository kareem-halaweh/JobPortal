import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';


@Component({
  selector: 'app-filters-admin-jobs',
  imports: [
    NgClass
  ],
  templateUrl: './filters-admin-jobs.component.html',
  standalone: true,
  styleUrl: './filters-admin-jobs.component.css'
})
export class FiltersAdminJobsComponent {
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
