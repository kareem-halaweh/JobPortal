import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { allEmployers } from '../admin-data/adminData';


@Component({
  selector: 'app-manage-employers',
  imports:[CommonModule,FormsModule],
  templateUrl: './manage-employers.component.html',
  styleUrls: ['./manage-employers.component.css']
})
export class ManageEmployersComponent {
  allEmployers=allEmployers;
};

 