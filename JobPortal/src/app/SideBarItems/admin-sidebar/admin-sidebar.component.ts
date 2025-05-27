import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  sidebarVisible: boolean = false;

  get isMobileScreen(): boolean {
    return typeof window !== 'undefined' && window.innerWidth<768;
  }
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
