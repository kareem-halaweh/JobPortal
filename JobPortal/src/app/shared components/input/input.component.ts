import {Component, Input} from '@angular/core';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [
    NgIf
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() requiredMessage: string = '';
  @Input() icon: string = '';
  @Input() submitted: boolean = false;
}
