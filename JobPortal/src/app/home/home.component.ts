import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {CategoriesComponent} from './categories/categories.component';
import {CarouselComponent} from './carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CategoriesComponent,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
