import {Component, EventEmitter, Output , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/jobs.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() jobCount: number = 0;
  @Input() filteredJobsCount: number = 0;

  @Output() searchChanged = new EventEmitter<string>();

  searchTerm = '';

  onSearch() {
    this.searchChanged.emit(this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.onSearch();
  }
}

