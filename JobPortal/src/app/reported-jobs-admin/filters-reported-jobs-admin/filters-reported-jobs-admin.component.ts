import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filters-reported-jobs-admin',
  imports: [

  ],
  templateUrl: './filters-reported-jobs-admin.component.html',
  styleUrl: './filters-reported-jobs-admin.component.css'
})
export class FiltersReportedJobsAdminComponent {
  @Input() currentFilter: string = 'all';
  @Output() sortChanged = new EventEmitter<string>();



  sortBy(method: string) {
    this.sortChanged.emit(method);
  }


}


