import {Component, OnInit} from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {CategoriesComponent} from './categories/categories.component';
import {CarouselComponent} from './carousel/carousel.component';
import {Hero2Component} from './hero2/hero2.component';
import {AuthService} from '../services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CategoriesComponent,
    CarouselComponent,
    Hero2Component,
    Hero2Component,
    NgIf,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  showCategories: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const roleId = this.authService.getUserRoleId();
    if (roleId === 1 || roleId === 3) {
      this.showCategories = false;
    }
  }
}
