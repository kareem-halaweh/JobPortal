import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-jobsemployee',
  standalone: true,
  imports: [
  ],
  templateUrl: './card-jobsemployee.component.html',
  styleUrl: './card-jobsemployee.component.css'
})
export class CardJobsemployeeComponent {


  @Input()title :string = '';
  @Input()company ='';
  @Input() location:string = '';
  @Input()type ='';
  @Input()salary ='';
  @Input ()Date :string = '';
  @Input()imageUrl: string='';
  @Input()link: string='';
}
