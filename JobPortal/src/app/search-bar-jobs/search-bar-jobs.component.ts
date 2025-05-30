import {Component, EventEmitter, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-search-bar-jobs',
  imports: [
    NgIf
  ],
  templateUrl: './search-bar-jobs.component.html',
  styleUrl: './search-bar-jobs.component.css'
})
export class SearchBarJobsComponent {
  selectedLocation: string = '';
  @Output() locationChanged = new EventEmitter<string>();
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  LocationChange(location: string) {
    this.locationChanged.emit(location);
  }
}
