import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/users';
import { UserAcount } from '../models/users-acount';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:9002/api';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<any>(`${this.baseUrl}/users`)
      .pipe(map((response) => response.map((item: any) => new User(item))));
  }
  addUser(user: UserAcount): Observable<User> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post<User>(`${this.baseUrl}/users`, body, {
      headers: headers,
    });
  }
  deleteUser(userID: number): Observable<{}> {
    const headers = { 'content-type': 'application/json' };
    return this.http.delete(`${this.baseUrl}/users/${userID}`, {
      headers: headers,
    });
  }
}
