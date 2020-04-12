import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { appRoutes } from 'src/constants';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent implements OnInit {

  user$: Observable<User>;

  constructor(private readonly authService: AuthService,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/', appRoutes.login]);
  }
}
