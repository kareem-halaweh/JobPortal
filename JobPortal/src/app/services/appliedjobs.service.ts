import { Injectable } from '@angular/core';
import { JobApplied } from '../models/jobApplied.model';

@Injectable({ providedIn: 'root' })
export class jobAppliedService {
  private jobApplied: JobApplied[] = [
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

    },{
      id: 5,

      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },{
      id: 6,

      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },{
      id: 7,

      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'pending',
      date: '2025-05-02'
    },
    {
      id: 8,
      type: 'Full Time',
      jobTitle: 'Digital Marketing Executive',
      companyName: 'Google',
      imageUrl: 'download.jpeg',
      status: 'rejected',
      date: '2025-05-02'

    }];
  getjobApplied(): JobApplied[] {
    return this.jobApplied;
  }
}
