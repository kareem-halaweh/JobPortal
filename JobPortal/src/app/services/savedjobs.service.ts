import { Injectable } from '@angular/core';
import {savedJob} from '../models/savedjobs.model';

@Injectable({ providedIn: 'root' })
export class savejobsService{
  private savedJob: savedJob[] = [
    {
      id: 1,
      job_title: 'Digital Marketing Executive',
      company:'google',
      link:'',
      type: 'Full time',
      position: 'nablus',
      imageUrl: 'download.jpeg'

    }];

  getsavedJob():savedJob []{
    return this.savedJob;
  }


}
