import { Component } from '@angular/core';
import {CarouselCardComponent} from './carousel-card/carousel-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [
    CarouselCardComponent,
    NgForOf
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  data = [
    {
      name: 'Mohammed Shamsuddin',
      quote: 'I got selected by Said Bawazeer Trading as a Product Sales Supervisor. This platform really helped me reach that goal smooth and rewarding experience!',
      company: 'SAID BAWAZIR · Sales',

    },
    {
      name: 'Salma Nasser',
      quote: 'I found the perfect opportunity through this platform! It helped me connect with top companies in my field and gave me the confidence to go after the career I’ve always dreamed of.',
      company: 'PALESTINE TECH · Developer',

    },
    {
      name: "Amina Youssef",
      quote: "Thanks to this platform, I finally landed my dream IT job! The user-friendly interface, detailed listings, and smart filters made my job hunt easier and more efficient than ever.",
      company: "TECHSOFT · Developer",

    },
    {
      name: "Ali Omar",
      quote: "A perfect platform to grow your career opportunities. I was able to explore a wide variety of positions and connect with employers who truly value talent and passion. Highly recommended!",
      company: "OMAR GROUP · Marketing",

    }
  ];

}
