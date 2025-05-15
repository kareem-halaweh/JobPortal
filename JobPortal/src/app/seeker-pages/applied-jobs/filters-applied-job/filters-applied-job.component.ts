import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-filters-applied-job',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './filters-applied-job.component.html',
  styleUrl: './filters-applied-job.component.css'
})
export class FiltersAppliedJobComponent {
  @Input() currentFilter: string = 'all';
  @Input() sortLabel:string='all';
  @Input()  dropdownOpen=  false;

  @Output() filterChanged = new EventEmitter<string>();
  @Output ()sortChanged = new EventEmitter<string>();

  @Output ()toggleDropdown=new EventEmitter<string>();

  setFilter(filter: string) {
    this.filterChanged.emit(filter.toLowerCase());
  }

  sortBy(method: string) {
    this.sortChanged.emit(method);
    this.dropdownOpen = false;
  }
}
