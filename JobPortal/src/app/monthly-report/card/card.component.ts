import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [
    NgStyle

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() colortext: string = '';
  @Input() bg: string = '';
}
