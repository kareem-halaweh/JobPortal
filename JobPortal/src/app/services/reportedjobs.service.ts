import { Injectable } from '@angular/core';
import {reportedJob} from '../models/reportedjobs.model';

@Injectable({ providedIn: 'root' })
export class reportejobsService{
  private reportedJob: reportedJob[] = [
    {
      id: 1,
      job_title: 'Digital Marketing Executive',
      type: 'Full Time',
      position: 'nablus',
      company:'goole',
      reason:'Fraud',
      date: '20/04/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 2,
      job_title: 'Digital Marketing Executive',
      type: 'part time',
      position: 'nablus',
      company:'google',
      reason:'Fraud',
      date: '20/05/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 3,
      job_title: 'Digital Marketing Executive',
      type: 'part time',
      position: 'nablus',
      company:'google',
      reason:'Fraud',
      date: '20/05/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 4,
      job_title: 'Digital Marketing Executive',
      type: 'part time',
      position: 'nablus',
      company:'google',
      reason:'Fraud',
      date: '20/05/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 5,
      job_title: 'Digital Marketing Executive',
      type: 'part time',
      position: 'nablus',
      company:'google',
      reason:'Fraud',
      date: '20/05/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 6,
      job_title: 'Digital Marketing Executive',
      type: 'Full Time',
      position: 'nablus',
      company:'goole',
      reason:'Fraud',
      date: '20/04/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 7,
      job_title: 'Digital Marketing Executive',
      type: 'Full Time',
      position: 'nablus',
      company:'goole',
      reason:'Fraud',
      date: '20/04/2024',
      imageUrl: 'download.jpeg'
    },{
      id: 8,
      job_title: 'Digital Marketing Executive',
      type: 'Full Time',
      position: 'nablus',
      company:'goole',
      reason:'Fraud',
      date: '20/04/2024',
      imageUrl: 'download.jpeg'
    }];

getreportedJob():reportedJob []{
  return this.reportedJob;
}

}
