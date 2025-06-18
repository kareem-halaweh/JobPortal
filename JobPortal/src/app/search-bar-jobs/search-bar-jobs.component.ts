import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar-jobs',
  templateUrl: './search-bar-jobs.component.html',
  styleUrls: ['./search-bar-jobs.component.css']
})
export class SearchBarJobsComponent {
  selectedLocation: string = '';
  dropdownOpen = false;

  @Output() locationChanged = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();

  searchValue: string = '';

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  LocationChange(location: string) {
    this.selectedLocation = location;
    this.locationChanged.emit(location);
    this.dropdownOpen = false;
  }

  onSearchChanged(value: string) {
    this.searchValue = value;

    this.searchChanged.emit(value.trim().toLowerCase());
  }

  onSearchClicked() {
    this.searchChanged.emit(this.searchValue.trim().toLowerCase());
  }
}

