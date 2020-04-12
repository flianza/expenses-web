import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { appRoutes } from '../../../constants';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private readonly router: Router,
              private readonly authService: AuthService) {}

  canActivate(_: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    if (!this.authService.isAuthorized()) {
      this.navigateToError();
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route);
  }

  private navigateToError() {
    this.router.navigate(['/', appRoutes.login]);
  }
}
