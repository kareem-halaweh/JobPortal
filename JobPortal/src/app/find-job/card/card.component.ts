import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Job} from '../../models/job.model';
import {NgIf} from '@angular/common';



@Component({
  selector: 'app-card',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() job!: Job;
}
