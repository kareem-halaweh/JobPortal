import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import { Input , Output, EventEmitter } from '@angular/core';
import {SortDropdownComponent} from '../../../sort-dropdown/sort-dropdown.component';
@Component({
  selector: 'app-filters-application',
  imports: [
    NgClass,
    SortDropdownComponent
  ],
  templateUrl: './filters-application.component.html',
  standalone: true,
  styleUrl: './filters-application.component.css'
})
export class FiltersApplicationComponent {
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
