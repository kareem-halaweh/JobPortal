import { Component } from '@angular/core';
import {TableSavedjobComponent} from './table-savedjob/table-savedjob.component';

@Component({
  selector: 'app-saved-jobs',
  imports: [
    TableSavedjobComponent
  ],
  templateUrl: './saved-jobs.component.html',
  styleUrl: './saved-jobs.component.css'
})
export class SavedJobsComponent {

}
