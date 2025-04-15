import { Component } from '@angular/core';
import { allEmployers } from '../admin-data/adminData';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-view-employers',
imports: [CommonModule],
templateUrl: './view-employers.component.html',
styleUrl: './view-employers.component.css'
})
export class ViewEmployersComponent {
    allEmployers=allEmployers;
}
