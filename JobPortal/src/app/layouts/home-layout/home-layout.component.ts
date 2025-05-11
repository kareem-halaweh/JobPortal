import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeekerSidebarComponent } from '../../SideBarItems/seeker-sidebar/seeker-sidebar.component';
import {EmployerSidebarComponent} from "../../SideBarItems/employer-sidebar/employer-sidebar.component";
import {AdminSidebarComponent} from "../../SideBarItems/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, SeekerSidebarComponent, EmployerSidebarComponent, AdminSidebarComponent],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {}
