import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@Component({
  selector: 'app-find-job',
  imports: [CardComponent,SearchBarComponent ],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent {

}
