import { Injectable } from "@angular/core"
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'
import { Observable, throwError } from "rxjs"
import { AuthenticationService } from "../services/auth.service"
import { catchError } from "rxjs/operators"
import { contains } from "jquery"


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor( private authService: AuthenticationService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // console.log("Interceptore check:: ")

        if(! this.validate(request)){

            const headers = request.headers.set("Authorization", `Bearer ${this.authService.token()}`)
            const newRequest = request.clone({headers})
            return next.handle(newRequest);
        }

        return next.handle(request)

    }

    validate(request: HttpRequest<any>){

      if(! request.url.endsWith('login')
      || request.url.indexOf("signup") != -1
      || request.url.indexOf("forgot-password") != -1
      || request.url.indexOf("reset-password") != -1){
          return false;
      }
      return true;
    }
}


