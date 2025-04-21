import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-job',
  imports: [],
  templateUrl: './card-job.component.html',
  styleUrl: './card-job.component.css'
})
export class CardJobComponent {
  @Input()title :String = '';
  @Input()company ='';
  @Input() location:String = '';
  @Input()type ='';
  @Input()salary ='';
  @Input ()Date :String = '';
  @Input() imageUrl!: string;
}
