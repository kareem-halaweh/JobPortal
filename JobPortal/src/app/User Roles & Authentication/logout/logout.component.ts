import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-logout',
  imports: [


  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  userRolePath: string = '/home';

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove token and user data
      localStorage.removeItem('token');
      const userJson = localStorage.getItem('user');

      if (userJson) {
        try {
          const user = JSON.parse(userJson);
          console.log('User from localStorage:', user);
          switch (user.role_id) {
            case 1:
              this.userRolePath = '/Admin/home';
              break;
            case 2:
              this.userRolePath = '/Seeker/home';
              break;
            case 3:
              this.userRolePath = '/Employer/home';
              break;
            default:
              this.userRolePath = '/';
          }
        } catch (err) {
          console.error('Error parsing user:', err);
        }
      }
    }
  }

  cancel(): void {
    console.log('Navigating to', this.userRolePath);
    this.router.navigateByUrl(this.userRolePath);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/']),
      error: err => {
        console.error('Logout error:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      }
    });
  }
}
