import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private baseUrl = 'http://localhost:9002/api';
  constructor(private http: HttpClient) {}

  getClass(): Observable<Class[]> {
    return this.http
      .get<any>(`${this.baseUrl}/classes`)
      .pipe(map((response) => response.map((item: any) => new Class(item))));
  }
}
