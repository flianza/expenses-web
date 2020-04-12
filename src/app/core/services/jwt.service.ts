import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { DecodedAuthToken } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly authTokenKey = 'auth_token';
  private readonly refreshTokenKey = 'refresh_token';

  constructor(private readonly jwtHelper: JwtHelperService) { }

  getAuthToken(): string {
    return localStorage.getItem(this.authTokenKey);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey);
  }

  getDecodedAuthToken(): DecodedAuthToken {
    return this.jwtHelper.decodeToken(this.getAuthToken());
  }

  setAuthToken(token: string) {
    localStorage.setItem(this.authTokenKey, token);
  }

  setRefreshToken(token: string) {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  deleteTokens(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  isAuthTokenExpired(): boolean {
    if (!this.getAuthToken()) {
      return false;
    }
    return this.jwtHelper.isTokenExpired(this.getAuthToken());
  }
}
