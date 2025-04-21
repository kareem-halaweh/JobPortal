import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-row-job',
    imports: [
        RouterLink
    ],
  templateUrl: './row-job.component.html',
  styleUrl: './row-job.component.css'
})
export class RowJobComponent {
  @Input() link: string = '';
}
