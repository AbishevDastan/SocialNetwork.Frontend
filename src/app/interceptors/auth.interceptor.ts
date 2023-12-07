import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { catchError, throwError } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable()

export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private userService: UserService,
                private router: Router) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.token}`,
        },
      });
  
      return next.handle(req)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if ([401, 403].indexOf(error.status) !== -1) {
              this.userService.logout();
              this.router.navigate(['/login'], {
                    queryParams: {
                    authFailed: true
                }
              }).then(() => {});
            }
  
            return throwError(error);
          }),
        );
    }
  }