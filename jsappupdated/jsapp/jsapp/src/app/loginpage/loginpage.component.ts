import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApiService } from '../login-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { TokenService } from '../token.service';


@Component({

  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginComponent {
  title = 'localStrorageExample';

  loginForm: FormGroup;
  http: any;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private loginApiService: LoginApiService,
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]

    });

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//method to set a token
  setToken(): void {
    const token = "x-auth-token";
    this.tokenService.setToken(token);
    console.log('Token set:', token);
  }

  //method to get the token
  getToken(): void {
    const token = this.tokenService.getToken();
    if (token) {
      console.log('Retriived token:', token);
    } else {
      console.log('no token found.');
    }
    }

    //method to remove the token
    removeToken(): void {
      this.tokenService.removeToken();
      console.log('Token removed');
    }

    makeAuthorizedRequest(): void {
      this.http.get('http://localhost:5000/api/users/login')
        .subscribe(
          (data: any) => console.log('Authorized request data:', data),
          (error: any) => console.error('Authorized request error:', error)
        );
    }

  login() {

    let payload = this.loginForm.value
    this.httpService.login(payload).subscribe((response: any) => {
      if (response) {
        // this.router.navigate('/')
        // console.warn(response.msg)
        console.log(response.token)
        localStorage.setItem('token', response.token)
        // set the respose token in the local stoage
        this.router.navigate(['./list'])
      }
    })

    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Form is valid');
    } else {
      if (this.loginForm.controls['password'].invalid) {
        alert('Password is incorrect');
      }
    }
  }

  signUp() {
    this.router.navigate(['./profile'])
  }
  auth() {
    this.router.navigate(['./list'])
  }
  OnFormSubmitted() {
    console.log("form Submitted");
  }
}
