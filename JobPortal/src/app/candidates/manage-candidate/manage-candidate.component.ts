import { Component } from '@angular/core';
import { allCandidates } from '../data/candidates-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-candidate',
  imports: [CommonModule],
  templateUrl: './manage-candidate.component.html',
  styleUrl: './manage-candidate.component.css'
})
export class ManageCandidateComponent {
  allCandidates=allCandidates;
}
