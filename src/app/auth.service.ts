// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Mock signup method
  signup(username: string, password: string): Observable<any> {
    // Simulate an API call
    return of({ message: 'Signup successful', username }).pipe(delay(1000));
  }

  // Mock login method
  login(username: string, password: string): Observable<any> {
    // Simulate an API call with dummy data
    if (username === 'test' && password === 'password') {
      return of({ message: 'Login successful', username }).pipe(delay(1000));
    } else {
      return of({ message: 'Invalid credentials' }).pipe(delay(1000));
    }
  }

  // Mock logout method
  logout(): Observable<any> {
    return of({ message: 'Logout successful' }).pipe(delay(1000));
  }
}
