import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  selectedOption = 'Select Option';
  options = ['Option 1', 'Option 2', 'Option 3'];

  searchTerm = '';

  selectOption(option: string) {
    this.selectedOption = option;
  }

  onSearch() {
    console.log('Search term:', this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.onSearch();
  }

}

