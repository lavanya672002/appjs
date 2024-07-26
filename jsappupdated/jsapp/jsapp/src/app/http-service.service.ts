//


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  data:any;
  // private apiUrl = 'https://api.example.com/data'; // Replace with your API URL
  private baseUrl = 'http://localhost:5000/api/users'; // Replace with your API URL




  constructor(private http: HttpClient) { }



  // Method to GET data
  getData(token: string): Observable<any> {
    let url = `${this.baseUrl}`

    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  login(payload: any): Observable<any> {
    let url =` ${this.baseUrl}/login`
    return this.http.post<any>(url, payload).pipe(
      catchError(this.handleError)
    );
  }

  createUser(payload: any): Observable<any> {
    let url = `${this.baseUrl}/register`
    return this.http.post<any>(url, payload).pipe(
      catchError(this.handleError)
    );
  }


  list(): Observable<any> {
    let url = `${this.baseUrl}/list`
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }


  // Method to POST data
  // postData(data: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, data).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage =`Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  setData(data:any){
    if(data){
      this.data = data;
    }
  }
  getSavedData(){
    if(this.data){
     return this.data;
    }
  }
}
