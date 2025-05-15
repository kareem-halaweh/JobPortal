import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-employer-jobs',
  imports: [],
  templateUrl: './card-employer-jobs.component.html',
  styleUrl: './card-employer-jobs.component.css'
})
export class CardEmployerJobsComponent {
  @Input() title:string = '';
  @Input()company ='';
  @Input() location:string = '';
  @Input()type ='';
  @Input()salary ='';
  @Input ()Date :string = '';
  @Input()imageUrl: string='';
  @Input()linkcompany: string='';
  @Input() linkjob='';
}
