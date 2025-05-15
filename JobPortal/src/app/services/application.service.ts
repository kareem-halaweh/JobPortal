import { Injectable } from '@angular/core';
import {JobApplication} from '../models/application.model';

@Injectable({ providedIn: 'root' })
export class ApplicationsService {
  private jobApplications: JobApplication[] = [
    {
      id: 1,

      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },
    {
      id: 2,
      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'rejected',
      date: '2025-05-02'
    },
    {
      id: 3,
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },{
      id: 4,
      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 5,
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },{
      id: 6,
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'download.jpeg',
      status: 'accepted',
      date: '2025-04-28'

    },{id: 7,
  jobTitle: 'Frontend Developer',
  companyName: 'Meta',
  type:'part time',
  imageUrl: 'download.jpeg',
  status: 'accepted',
  date: '2025-04-28'}
  ];

  getApplications(): JobApplication[] {
    return this.jobApplications;
  }
}

