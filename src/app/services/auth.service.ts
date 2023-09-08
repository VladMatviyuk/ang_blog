import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(email: any, password: any): boolean {

    if(email === 'test' && password === '123') {
      this.router.navigate(['/admin'])
      return true
    }

    return false;
  }

  isLoggedIn() {
    const token = localStorage.getItem(`token`) || ''; // get token from local storage

    if(!token) {
      return false;
    }

    const payload = atob(token.split('.')[1]); // decode payload of token

    const parsedPayload = JSON.parse(payload); // convert payload into an Object

    return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
}
