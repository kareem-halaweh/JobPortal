import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-admin-report-monthly',
  imports: [
  ],
  templateUrl: './card-admin-report-monthly.component.html',
  styleUrl: './card-admin-report-monthly.component.css'
})
export class CardAdminReportMonthlyComponent {
  @Input() summary: any;

}
