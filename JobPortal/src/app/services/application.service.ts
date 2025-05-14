import { Injectable } from '@angular/core';
import { JobApplication } from '../models/application.model';

@Injectable({ providedIn: 'root' })
export class ApplicationsService {
  private jobApplications: JobApplication[] = [
    {
      id: 1,
      userId: 1,
      jobId: 1,
      username: '',
      type: 'Full Time',
      Email:'',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'assets/download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 2,
      userId: 1,
      jobId: 2,
      username: '',
      Email:'',
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'assets/download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },
    {
      id: 2,
      userId: 1,
      jobId: 1,
      username: '',
      type: 'Full Time',
      Email:'',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'assets/download.jpeg',
      status: 'rejected',
      date: '2025-05-02'
    },
    {
      id: 3,
      userId: 1,
      jobId: 2,
      username: '',
      Email:'',
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'assets/download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },{
      id: 4,
      userId: 1,
      jobId: 1,
      username: '',
      type: 'Full Time',
      Email:'',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'assets/download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 2,
      userId: 1,
      jobId: 2,
      username: '',
      Email:'',
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'assets/download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },
    {
      id: 1,
      userId: 1,
      jobId: 1,
      username: '',
      type: 'Full Time',
      Email:'',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'assets/download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 2,
      userId: 1,
      jobId: 2,
      username: '',
      Email:'',
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'assets/download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },{
      id: 1,
      userId: 1,
      jobId: 1,
      username: 'Farah',
      type: 'Full Time',
      Email:'',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'assets/download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 2,
      userId: 1,
      jobId: 2,
      username: '',
      Email:'',
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'assets/download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    },
    {
      id: 1,
      userId: 1,
      jobId: 1,
      username: '',
      type: 'Full Time',
      Email:'',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'assets/download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 2,
      userId: 1,
      jobId: 2,
      username: '',
      Email:'',
      jobTitle: 'Frontend Developer',
      companyName: 'Meta',
      type:'part time',
      imageUrl: 'assets/download.jpeg',
      status: 'accepted',
      date: '2025-04-28'
    }
  ];

  getApplications(): JobApplication[] {
    return this.jobApplications;
  }
}

