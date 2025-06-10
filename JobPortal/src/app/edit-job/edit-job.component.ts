import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../services/jobs.service';
import { Job } from '../models/job.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  imports: [FormsModule],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent implements OnInit {
  jobId!: number;
  jobData!: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJobById(this.jobId).subscribe({
      next: (job) => {
        this.jobData = job;
      },
      error: () => {
        // job not found
        this.router.navigate(['/jobs']);
      }
    });
  }

  onSubmit(): void {
    this.jobService.updateJob(this.jobId, this.jobData).subscribe({
      next: () => this.router.navigate(['/jobs'])
    });
  }
}
