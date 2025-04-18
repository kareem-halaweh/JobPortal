import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-reported-job',
  imports: [
    RouterLink
  ],
  templateUrl: './reported-job.component.html',
  styleUrl: './reported-job.component.css'
})
export class ReportedJobComponent {
@Input() link: string = '';
}
