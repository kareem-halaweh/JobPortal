import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ButtonComponent} from '../shared components/button/button.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
