import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-cards-admin-jobs',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
    templateUrl: './cards-admin-jobs.component.html',
    standalone: true,
    styleUrl: './cards-admin-jobs.component.css'
})
export class CardsAdminJobsComponent {
  @Input() id!: number;
  @Input() title:string = '';
  @Input()company ='';
  @Input() location:string = '';
  @Input()type ='';
  @Input()salary ='';
  @Input ()Date :string = '';
  @Input()imageUrl: string='';
  @Input()linkcompany: string='';


}
