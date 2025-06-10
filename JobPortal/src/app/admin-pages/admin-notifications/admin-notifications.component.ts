import { Component } from '@angular/core';
import { NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-admin-notifications',
  standalone: true,
  imports: [NgIf, NgForOf, NgStyle],
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent {
  allNotifications = [
    {
      sender: 'System',
      message: 'User JohnDoe reported the job "Data Analyst" for inappropriate content.',
      type: 'report',
      date: 'May 8, 2025',
      actions: ['View Job']
    },
    {
      sender: 'Moderator',
      message: 'The employer "FakeCompany" was flagged and removed by moderation team.',
      type: 'moderation',
      date: 'May 7, 2025',
      actions: ['Review']
    },
    {
      sender: 'Platform Bot',
      message: 'Job posting "UX Designer" by FastHire was reported multiple times.',
      type: 'alert',
      date: 'May 6, 2025',
      actions: ['Investigate']
    },
    {
      sender: 'Report System',
      message: 'Employer "ShadowHR" has been reported 4 times this week.',
      type: 'warning',
      date: 'May 5, 2025',
      actions: []
    },
    {
      sender: 'System',
      message: 'The job "AI Trainer" was auto-disabled due to repeated violations.',
      type: 'auto',
      date: 'May 4, 2025',
      actions: ['Review Logs']
    }
  ];

  visibleNotifications = this.allNotifications.slice(0, 3);

  loadMore() {
    const next = this.allNotifications.slice(this.visibleNotifications.length, this.visibleNotifications.length + 3);
    this.visibleNotifications = [...this.visibleNotifications, ...next];
  }

  get hasMore(): boolean {
    return this.visibleNotifications.length < this.allNotifications.length;
  }
}
