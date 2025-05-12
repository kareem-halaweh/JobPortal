import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-filters-favorite-jobs',
  imports: [
    NgClass
  ],
  templateUrl: './filters-favorite-jobs.component.html',
  styleUrl: './filters-favorite-jobs.component.css'
})
export class FiltersFavoriteJobsComponent {
  @Input() currentFilter: string = 'all';
  @Output() filterChanged = new EventEmitter<string>();

  setFilter(filter: string) {
    this.filterChanged.emit(filter);
  }



}
