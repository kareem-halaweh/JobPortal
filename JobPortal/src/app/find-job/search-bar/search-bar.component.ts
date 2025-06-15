import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input() jobCount: number = 0;
  @Input() filteredJobsCount: number = 0;


  @Output() searchChanged = new EventEmitter<any>();

  filters: any = {
    title: '',
    salary: '',
    location: '',
    skills: '',
    category: '',
    employment_type: ''
  };

  onSearch() {
    this.searchChanged.emit(this.filters);
  }

  clear() {
    this.filters = {
      title: '',
      salary: '',
      location: '',
      skills: '',
      category: '',
      employment_type: ''
    };
    this.searchChanged.emit(this.filters);
  }
}
