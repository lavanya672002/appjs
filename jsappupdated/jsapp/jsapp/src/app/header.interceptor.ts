import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
      let modifiedReq = request;

      if (token) {
        modifiedReq = request.clone({
          setHeaders: {
            "x-Auth-Token": ` ${token}`
          }
        });
      }

      return next.handle(modifiedReq).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Check if the token is in the response headers
            const authHeader = event.headers.get('authorization');
            if (authHeader) {
              // Store the token in local storage
              localStorage.setItem('token', authHeader);
            }
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          // Handle the error
          let errorMessage = 'Unknown error!';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error:${error.error.message}`;
          } else {
            // Server-side error
            errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
            if (error.error && error.error.msg) {
              errorMessage = error.error.msg;
            }
          }
          return throwError(errorMessage);
        })
      );
    }
  }
