import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {JobService} from '../services/jobs.service';
import { Job } from '../models/job.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  imports: [
    FormsModule
  ],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent {
  jobId!: number;
  jobData!: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    const job = this.jobService.getJobById(this.jobId);
    if (job) {
      this.jobData = { ...job };
    } else {
      // job not found
      this.router.navigate(['/jobs']);
    }
  }

  onSubmit(): void {
    this.jobService.updateJob(this.jobId, this.jobData);
    this.router.navigate(['/jobs']);
  }

}
