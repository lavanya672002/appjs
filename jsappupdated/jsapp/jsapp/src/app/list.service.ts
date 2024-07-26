import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  private apiUrl = 'http://localhost:5000/api/users/list'; // Replace with actual list API URL


  constructor(private http: HttpClient) { }

  getListData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }
}