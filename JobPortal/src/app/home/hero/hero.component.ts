import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared components/button/button.component';
import {HeaderTextComponent} from '../../shared components/header-text/header.component';

@Component({
  selector: 'app-hero',
  imports: [

    ButtonComponent,
    HeaderTextComponent

  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
