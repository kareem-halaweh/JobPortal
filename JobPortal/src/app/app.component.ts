import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {LoginComponent} from './User Roles & Authentication/login/login.component';
import {
  ChangePasswordSuccessComponent
} from './User Roles & Authentication/change-password/change-password-success/change-password-success.component';
import {ChangePasswordComponent} from './User Roles & Authentication/change-password/change-password.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoginComponent, ChangePasswordSuccessComponent, ChangePasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobPortal';
}
