import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-seeker-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './seeker-layout.component.html',
  styleUrl: './seeker-layout.component.css'
})
export class SeekerLayoutComponent {}
