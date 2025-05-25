import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobPortal';

  constructor(public router: Router) {}
}
