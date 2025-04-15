import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allCandidates } from '../data/candidates-data';
@Component({
  selector: 'app-candidates-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidates-list.component.html',
  styleUrl: './candidates-list.component.css'
})

  export class CandidatesListComponent {
    allCandidates=allCandidates;
    
}
