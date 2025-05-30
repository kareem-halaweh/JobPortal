import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const roleId = Number(this.authService.getUserRoleId());
    const expectedRole = Number(route.data['expectedRole']);
    if (roleId === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
