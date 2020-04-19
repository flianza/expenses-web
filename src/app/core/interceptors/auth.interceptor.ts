import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { apiRoutes } from '../../../constants';
import { environment } from '../../../environments/environment';
import { AuthService, JwtService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  private readonly notAuthorizedUrls = [
    `${environment.api}/${apiRoutes.token.base}/`,
    `${environment.api}/${apiRoutes.token.base}/${apiRoutes.token.refresh}/`,
  ];

  constructor(private readonly jwtService: JwtService,
              private readonly authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.needsAuthorization(req.url)) {
      return this.handleRequest(req, next);
    }

    return this.getAuthToken()
      .pipe(
        map(token => this.authorizeRequest(token, req)),
        switchMap(authorizedRequest => this.handleRequest(authorizedRequest, next))
      );
  }

  private needsAuthorization(url: string): boolean {
    return !this.notAuthorizedUrls.find(path => url.includes(path));
  }

  private getAuthToken(): Observable<string> {
    if (!this.jwtService.isAuthTokenExpired()) {
      return of(this.jwtService.getAuthToken());
    }
    return this.authService.refresh();
  }

  private authorizeRequest(token: string, req: HttpRequest<any>): HttpRequest<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return req.clone({ headers });
  }

  private handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((resp: HttpErrorResponse) => this.handleError(resp, req, next))
      );
  }

  private handleError(resp: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler) {
    return throwError(resp);
  }
}
