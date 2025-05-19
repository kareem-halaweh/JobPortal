import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminSidebarComponent } from '../../SideBarItems/admin-sidebar/admin-sidebar.component';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import { SeekerSidebarComponent } from '../../SideBarItems/seeker-sidebar/seeker-sidebar.component';
import { EmployerSidebarComponent } from '../../SideBarItems/employer-sidebar/employer-sidebar.component';
import { RouterOutlet } from '@angular/router';
import {HeaderSeekerComponent} from '../../headers/header-seeker/header.component';
import {HeaderEmployerComponent} from '../../headers/header-employer/header.component';
import {HeaderAdminComponent} from '../../headers/header-admin/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderGuestComponent} from '../../headers/header-guest/header.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  imports: [
    RouterOutlet,
    AdminSidebarComponent,
    NgSwitch,
    SeekerSidebarComponent,
    EmployerSidebarComponent,
    NgSwitchCase,
    HeaderSeekerComponent,
    HeaderEmployerComponent,
    HeaderAdminComponent,
    NgIf,
    FooterComponent,
    HeaderGuestComponent,
    NgSwitchDefault
  ],
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  currentRole: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.updateRoleFromUrl(this.router.url); // for direct access
    this.router.events.subscribe(() => {
      this.updateRoleFromUrl(this.router.url); // for navigation
    });
  }

  updateRoleFromUrl(url: string) {
    url = url.toLowerCase();
    if (url.includes('/seeker')) this.currentRole = 'Seeker';
    else if (url.includes('/employer')) this.currentRole = 'Employer';
    else if (url.includes('/admin')) this.currentRole = 'Admin';
    else this.currentRole = '';
  }
}
