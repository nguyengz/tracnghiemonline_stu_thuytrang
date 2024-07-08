import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Subject } from '../models/subject';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private baseUrl: string = environment.apiUrl;
  private headers = environment.headers;
  constructor(private http: HttpClient) {}

  getSubject(): Observable<Subject[]> {
    return this.http
      .get<any>(`${this.baseUrl}/subjects`)
      .pipe(map((response) => response.map((item: any) => new Subject(item))));
  }
  addSubject(subject: Subject): Observable<Subject> {
    const body = JSON.stringify(subject);
    return this.http.post<Subject>(`${this.baseUrl}/subjects`, body, {
      headers: this.headers,
    });
  }
}
