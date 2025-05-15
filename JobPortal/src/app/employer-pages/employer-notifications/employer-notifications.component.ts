import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-employer-notifications',
  standalone: true,
  templateUrl: './employer-notifications.component.html',
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  styleUrls: ['./employer-notifications.component.css']
})
export class EmployerNotificationsComponent {
  allNotifications = [
    {
      sender: 'Admin',
      message: 'Your job posting for “Full Stack Developer” was removed due to guideline violations.',
      date: 'May 6, 2025',
    },
    {
      sender: 'Job Seeker',
      message: 'Ahmad Yasin applied for a FulL Stack Job ',
      date: 'May 5, 2025',
    },
    {
      sender: 'Admin',
      message: 'Your job posting for “Full Stack Developer” was removed due to guideline violations.',
      date: 'May 4, 2025',

    },
    {
      sender: 'Admin',
      message: 'Your job posting for “Full Stack Developer” was removed due to guideline violations.',
      date: 'May 3, 2025',
    },
    {
      sender: 'Seeker',
      message: 'Ahmad Ali applied for software engineer',
      date: 'May 2, 2025',

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
