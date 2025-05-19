import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {HeaderSeekerComponent} from './headers/header-seeker/header.component';
import {AdminSidebarComponent} from './SideBarItems/admin-sidebar/admin-sidebar.component';
import {ResetPasswordComponent} from './User Roles & Authentication/reset-password/reset-password.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HomeComponent, HeaderSeekerComponent, AdminSidebarComponent, ResetPasswordComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobPortal';

  constructor(public router: Router) {}
}
