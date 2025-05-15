import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-cards-admin-jobs',
  imports: [
    NgOptimizedImage
  ],
    templateUrl: './cards-admin-jobs.component.html',
    standalone: true,
    styleUrl: './cards-admin-jobs.component.css'
})
export class CardsAdminJobsComponent {
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
