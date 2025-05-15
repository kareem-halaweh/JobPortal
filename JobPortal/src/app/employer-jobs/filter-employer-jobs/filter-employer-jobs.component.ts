import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-employer-jobs',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './filter-employer-jobs.component.html',
  styleUrls: ['./filter-employer-jobs.component.css']
})
export class FilterEmployerJobsComponent {
  @Input() currentFilter: string = 'all';
  @Output() filterChanged = new EventEmitter<string>();
  @Output() SortChange = new EventEmitter<string>();


  setFilter(filter: string) {
    this.filterChanged.emit(filter);
  }

  sortBy(method: string) {
    this.SortChange.emit(method);
  }


}

