import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { ToastrService } from 'ngx-toastr';





@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    //const authToken = this.auth.getAuthorizationToken();
    const authToken = this.auth.getToken();

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            // this.errorDialogService.openDialog(event);
        }
        return event;
    }),
    catchError((error: HttpErrorResponse) => {
      let data = {
        reason: error && error.error.message ? error.error.message : 'Some Error Occur!!',
        status: error.status
      };
      this.toastr.error(data.reason);
      //this.errorDialogService.openDialog(data);
      return  throwError(error);
    }));
  }
}
