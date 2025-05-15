import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-seeker-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './seeker-sidebar.component.html',
  styleUrls: ['./seeker-sidebar.component.css']
})
export class SeekerSidebarComponent {
  sidebarVisible: boolean = false;

  get isMobileScreen(): boolean {
    return typeof window !== 'undefined' && window.innerWidth<768;
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
