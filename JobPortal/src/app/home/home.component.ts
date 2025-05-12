import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {CategoriesComponent} from './categories/categories.component';
import {CarouselComponent} from './carousel/carousel.component';
import {Hero2Component} from './hero2/hero2.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CategoriesComponent,
    CarouselComponent,
    Hero2Component,
    Hero2Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
