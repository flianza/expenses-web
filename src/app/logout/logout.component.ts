import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from 'src/constants';

import { AuthService } from '../core/services';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private readonly authService: AuthService,
              private readonly router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/', appRoutes.login]);
  }

}
