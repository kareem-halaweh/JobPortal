import {Component,  Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {JobApplication} from '../../../models/application.model';

@Component({
  selector: 'app-table-application',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './table-application.component.html',
  styleUrl: './table-application.component.css'
})
export class TableApplicationComponent {
  @Input() displayedApplication: JobApplication[] = [];
  getStatus(status: string): string {
    switch (status) {
      case 'accepted':
        return 'badge-accepted';
      case 'rejected':
        return 'badge-rejected';
      default:
        return 'badge-pending';
    }
  }

}
