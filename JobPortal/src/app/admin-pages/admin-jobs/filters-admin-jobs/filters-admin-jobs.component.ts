import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {SortDropdownComponent} from '../../../sort-dropdown/sort-dropdown.component';


@Component({
  selector: 'app-filters-admin-jobs',
  imports: [
    NgClass,
    SortDropdownComponent
  ],
  templateUrl: './filters-admin-jobs.component.html',
  styleUrl: './filters-admin-jobs.component.css'
})
export class FiltersAdminJobsComponent {
  @Input() currentFilter: string = 'all';
  @Output() filterChanged = new EventEmitter<string>();
  @Output()  SortChange = new EventEmitter<string>();
  selectedSort: string = 'ALL';


  setFilter(filter: string) {
    this.filterChanged.emit(filter);
  }
  sortBy(method: string) {
    this.selectedSort = method;
    this.SortChange.emit(method);
  }


}
