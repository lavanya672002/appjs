import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenkey = 'responseToken';

  constructor() { }

  //store the token
  setToken(token: string): void {
    localStorage.setItem(this.tokenkey, token);
  }

  //retrive the token
  getToken(): string | null {
    return localStorage.getItem(this.tokenkey);
  }

  //remove the token

  removeToken(): void {
    localStorage.removeItem(this.tokenkey);
  }
}
