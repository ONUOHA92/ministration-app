import { Observable, Subject } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationService } from './auth.service';

import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppService {

  private readonly subjectSource$ = new Subject<object>();

  constructor(
    public http: HttpClient,
    private authService: AuthenticationService,
    private router: Router) {

  }

  /**
   * 
   * @param fn 
   * @param retryNumb 
   */
  public httpRequestStrategy(fn, retryNumb = 0) {
    return fn.pipe(
      retry(retryNumb),
      catchError(this.handleError.bind(this))
    )
  }

  /**
   * 
   * @param error 
   */
  private handleError(error: HttpErrorResponse) {

    let toastMessage = 'Unable to complete request';
    if (error && error.error && error.error.message) {
      toastMessage = error.error.message;
    }

    return observableThrowError(error || []);
  }

  /**
   * provide access to observable
   */
  public get getObs(): Observable<object> {
    return this.subjectSource$.asObservable();
  }


  //   BASE REQUEST METHODS, GET AND POST

  /**
   * 
   * @param url 
   * @param options 
   * @param headers 
   */
  public get(url, options = {}): Observable<any> {

    return this.http.get(`${environment.apiUrl}/api/${url}`, {
      headers: { Authorization: `Bearer ${this.authService.token()}` }
    });
  }

  /**
   * 
   * @param url 
   * @param options 
   * @param headers 
   */
  public post(url, options = {},): Observable<any> {

    return this.http.post(`${environment.apiUrl}/api/${url}`, options, {
      headers: { Authorization: `Bearer ${this.authService.token()}` }
    });
  }

  // /**
  // * Perform a DELETE request.
  // * @param url - The URL for the DELETE request.
  // * @param options - Additional request options.
  // */
  // public delete(url, options = {}): Observable<any> {
  //   return this.http.delete(`${environment.apiUrl}/api/${url}`, {
  //     headers: { Authorization: `Bearer ${this.authService.token()}` },
  //   });
  // }

}
