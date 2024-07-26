import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Token Management Example';

  constructor(private tokenService: TokenService) {}

  // Method to set a token
  setToken(): void {
    const token = 'your_token_here';
    this.tokenService.setToken(token);
    console.log('Token set:', token);
  }

  // Method to get the token
  getToken(): void {
    const token = this.tokenService.getToken();
    if (token) {
      console.log('Retrieved token:', token);
    } else {
      console.log('No token found.');
    }
  }

  // Method to remove the token
  removeToken(): void {
    this.tokenService.removeToken();
    console.log('Token removed');
  }
}

  // Check internet connectivity
  // check if user is already loggedin  //check auth from storage if exists


