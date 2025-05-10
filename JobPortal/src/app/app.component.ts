import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {HeaderSeekerComponent} from './header-seeker/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  FooterComponent, HomeComponent, HeaderSeekerComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobPortal';

  constructor(public router: Router) {}
}
