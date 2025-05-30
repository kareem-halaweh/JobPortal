import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-card-employer-jobs',
  imports: [
    RouterLink
  ],
    templateUrl: './card-employer-jobs.component.html',
    standalone: true,
    styleUrl: './card-employer-jobs.component.css'
})
export class CardEmployerJobsComponent {
  @Input() id!:number;
  @Input() title:string = '';
  @Input()company ='';
  @Input() location:string = '';
  @Input()type ='';
  @Input()salary ='';
  @Input ()date :string = '';
  @Input()imageUrl: string='';
}
