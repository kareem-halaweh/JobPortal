import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-seeker-notifications',
  templateUrl: './seeker-notifications.component.html',
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./seeker-notifications.component.css']
})
export class SeekerNotificationsComponent {
  allNotifications = [
    {
      sender: 'Tech Corp',
      message: 'You have been shortlisted for the Frontend Developer position.',
      type: 'status',
      date: 'May 8, 2025',
      actions: ['View Job']
    },
    {
      sender: 'DreamSoft',
      message: 'Interview invitation for UX Designer on May 12, 2025.',
      type: 'interview',
      date: 'May 7, 2025',
      actions: ['Confirm', 'Decline']
    },
    {
      sender: 'Job Portal System',
      message: 'New job match: Backend Developer at CodeBridge.',
      type: 'recommendation',
      date: 'May 6, 2025',
      actions: ['View Job']
    },
    {
      sender: 'HealthCare Inc.',
      message: 'Job post for Medical Assistant will close in 2 days.',
      type: 'deadline',
      date: 'May 5, 2025',
      actions: []
    },
    {
      sender: 'Admin',
      message: 'Platform maintenance scheduled for May 10.',
      type: 'system',
      date: 'May 4, 2025',
      actions: []
    },
    {
      sender: 'EduLink',
      message: 'Your resume was viewed by EduLink HR.',
      type: 'status',
      date: 'May 3, 2025',
      actions: ['View Resume']
    }
  ];

  visibleNotifications = this.allNotifications.slice(0, 3);

  loadMore() {
    const nextBatch = this.allNotifications.slice(this.visibleNotifications.length, this.visibleNotifications.length + 3);
    this.visibleNotifications = [...this.visibleNotifications, ...nextBatch];
  }

  get hasMore(): boolean {
    return this.visibleNotifications.length < this.allNotifications.length;
  }
}
