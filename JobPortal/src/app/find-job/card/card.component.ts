import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Job } from '../../models/job.model';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() job!: Job;
  @Output() editJob = new EventEmitter<Job>();
  @Output() deleteJob = new EventEmitter<number>();

  constructor(private authService: AuthService) {}

  get isEmployer(): boolean {
    return this.authService.getUserRoleId() === 3; // 3 is employer role
  }

  get isAdmin(): boolean {
    return this.authService.getUserRoleId() === 1; // 1 is admin role
  }

  get canEdit(): boolean {
    return this.isEmployer && this.job.employer_id === this.authService.getUserId();
  }

  get canDelete(): boolean {
    return this.isAdmin || (this.isEmployer && this.job.employer_id === this.authService.getUserId());
  }

  onEdit() {
    this.editJob.emit(this.job);
  }

  onDelete() {
    this.deleteJob.emit(this.job.id ?? 0);
  }
}
