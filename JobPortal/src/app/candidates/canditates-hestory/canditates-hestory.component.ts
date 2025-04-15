import { Component } from '@angular/core';
import { allCandidates } from '../data/candidates-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canditates-hestory',
  imports: [CommonModule],
  templateUrl: './canditates-hestory.component.html',
  styleUrl: './canditates-hestory.component.css'
})
export class CanditatesHestoryComponent {
  allCandidates=allCandidates;
}
