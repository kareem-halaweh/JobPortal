import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import { Input , Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filters-application',
  imports: [
    NgClass
  ],
  templateUrl: './filters-application.component.html',
  styleUrl: './filters-application.component.css'
})
export class FiltersApplicationComponent {
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
