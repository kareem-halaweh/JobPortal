import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-cards-admin-jobs',
  imports: [
    RouterLink
  ],
    templateUrl: './cards-admin-jobs.component.html',
    standalone: true,
    styleUrl: './cards-admin-jobs.component.css'
})
export class CardsAdminJobsComponent {
  @Input() id!: number;
  @Input() title!:string;
  @Input()company!:string
  @Input() location!:string ;
  @Input()type !:string;
  @Input()salary!: string;
  @Input ()date! :string ;
  @Input()imageUrl!: string;
  @Output() deleteJob = new EventEmitter<number>();
  onDeleteClick() {
    this.deleteJob.emit(this.id);
  }

}
