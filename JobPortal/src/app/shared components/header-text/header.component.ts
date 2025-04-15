import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-header-text',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderTextComponent {
  @Input() headerText: string = '';
}
