import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-seeker-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, NgIf, NgClass],
  templateUrl: './seeker-layout.component.html',
  styleUrl: './seeker-layout.component.css'
})
export class SeekerLayoutComponent {

  sidebarVisible: boolean = false;

  get isMobileScreen(): boolean {
    return window.innerWidth < 768;
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }




}
