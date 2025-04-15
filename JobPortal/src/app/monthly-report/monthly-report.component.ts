import { Component } from '@angular/core';
import {TotalCardComponent} from './total-card/total-card.component';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-monthly-report',
  imports: [
    TotalCardComponent,
    CardComponent
  ],
  templateUrl: './monthly-report.component.html',
  styleUrl: './monthly-report.component.css'
})
export class MonthlyReportComponent {

}
