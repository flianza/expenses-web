import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = '';

  constructor(private readonly fb: FormBuilder,
              private readonly authService: AuthService,
              private readonly router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.logout();
  }

  login() {
    this.error = '';
    const username = this.form.value.username;
    const password = this.form.value.password;
    this.authService
      .login(username, password)
      .subscribe(_ => {
        this.router.navigate(['/']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error.detail;
      });
  }

}
