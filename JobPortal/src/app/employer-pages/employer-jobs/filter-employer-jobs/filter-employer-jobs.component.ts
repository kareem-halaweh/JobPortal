import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SortDropdownComponent} from '../../../sort-dropdown/sort-dropdown.component';

@Component({
  selector: 'app-filter-employer-jobs',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    SortDropdownComponent
  ],
  templateUrl: './filter-employer-jobs.component.html',
  styleUrls: ['./filter-employer-jobs.component.css']
})
export class FilterEmployerJobsComponent {
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

