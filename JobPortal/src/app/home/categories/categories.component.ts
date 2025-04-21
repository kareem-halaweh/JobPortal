import { Component } from '@angular/core';
import {CategoryCardComponent} from './category-card/category-card.component';

@Component({
  selector: 'app-categories',
  imports: [
    CategoryCardComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
