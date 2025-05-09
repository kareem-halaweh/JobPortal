import { Component } from '@angular/core';
import {RowJobComponent} from '../row-job/row-job.component';
import {HeaderSavedjobComponent} from '../header-savedjob/header-savedjob.component';

@Component({
  selector: 'app-table-savedjob',
  imports: [

    RowJobComponent,
    HeaderSavedjobComponent
  ],
  templateUrl: './table-savedjob.component.html',
  styleUrl: './table-savedjob.component.css'
})
export class TableSavedjobComponent {

}
