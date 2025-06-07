import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {RoleGuard} from './auth/role.guard';
import {AuthService} from './services/auth.service';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    AuthService,
    RoleGuard,
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
