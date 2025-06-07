import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {RoleGuard} from './app/auth/role.guard';
import {AuthService} from './app/services/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    AuthService,
    RoleGuard,
]
}).catch(err => console.error(err));
