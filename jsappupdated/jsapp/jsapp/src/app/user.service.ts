import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  mobileNo: string;
  jobSeeker: string;
  currentAddress: string;
  city: string;
  pincode: string;
  password: string;
  resume: File | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor() {
    this.usersSubject.next([]);
   }

   addUser(user: any){
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, user]);
   }
}
