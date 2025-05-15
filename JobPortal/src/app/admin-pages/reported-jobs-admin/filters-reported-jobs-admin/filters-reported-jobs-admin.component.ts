import {Component, Input,Output, EventEmitter} from '@angular/core';
import {SortDropdownComponent} from '../../../sort-dropdown/sort-dropdown.component';


@Component({
  selector: 'app-filters-reported-jobs-admin',
  imports: [
    SortDropdownComponent


  ],
  templateUrl: './filters-reported-jobs-admin.component.html',
  styleUrl: './filters-reported-jobs-admin.component.css'
})
export class FiltersReportedJobsAdminComponent {
  @Output() sortChanged = new EventEmitter<string>();
  sortLabel: string = 'Sort By';

  onSortChange(option: string) {
    this.sortLabel = option === 'newest' ? 'Newest' : 'Oldest';
    this.sortChanged.emit(option);
  }


}


