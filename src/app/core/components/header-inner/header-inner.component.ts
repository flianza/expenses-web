import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent implements OnInit {

  user$: Observable<User>;

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
