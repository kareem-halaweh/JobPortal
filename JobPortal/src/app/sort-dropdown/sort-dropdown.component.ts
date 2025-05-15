import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-sort-dropdown',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './sort-dropdown.component.html',
  styleUrl: './sort-dropdown.component.css'
})
export class SortDropdownComponent {
  @Input() sortLabel: string = 'Sort By';
  @Output() sortBy = new EventEmitter<string>();

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectSort(option: string) {
    this.sortBy.emit(option);
    this.dropdownOpen = false;
  }
}
