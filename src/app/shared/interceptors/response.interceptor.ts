import { Injectable } from "@angular/core"
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/do';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http'
import { AuthenticationService } from "../services/auth.service";


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        // Response
        return next.handle(request).pipe(
            catchError((error) => {

                if ([422, 401, 403, 203].indexOf(error.status) !== -1) {

                    // Sign out
                    this.authService.logout()
                    this.router.navigate(['/login']);
                }

                return throwError(error);
            })
        );

    }
}
