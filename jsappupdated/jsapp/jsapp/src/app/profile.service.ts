import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  private UserSubject = new BehaviorSubject<any[]>([]);
  users$ = this.UserSubject.asObservable();


  updateProfileForm(payload: any) {
    throw new Error('Method not implemented.');
  }
  updateProfileData(userId: any, payload: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:5000/api/users/register'; // Replace with actual profile API URL

  constructor(private http: HttpClient) {
    this.fetchUserList();
  }

  getProfileData(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/${userId}`);
  }
  getUserList(): Observable<any[]> {
    return this.http.get<any[]>('/api/users');
  }

  fetchUserList():void{
    this.http.get<any[]>('/api/register').subscribe(
      data => this.UserSubject.next(data),
      error => console.error('failed to fetch user list', error)
    );
  }

  addUser(user:any): Observable<any>{
    return this.http.post<any>('/api/register',user);
  }
}
