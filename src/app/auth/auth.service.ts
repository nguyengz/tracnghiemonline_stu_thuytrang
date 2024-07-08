import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9002/api';
  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, data).pipe(
      tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      })
    );
  }
  logout() {
    localStorage.removeItem('authUser');
  }
  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
