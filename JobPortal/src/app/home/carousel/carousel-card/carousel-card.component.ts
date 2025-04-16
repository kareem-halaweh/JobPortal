import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  imports: [],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.css'
})
export class CarouselCardComponent {

@Input() data: any;
}

