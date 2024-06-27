import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Faculty } from '../models/faculty';

@Injectable({
  providedIn: 'root',
})
export class FacultieService {
  private baseUrl = 'http://localhost:9002/api';
  constructor(private http: HttpClient) {}

  getFaculties(): Observable<Faculty[]> {
    return this.http
      .get<any>(`${this.baseUrl}/faculties`)
      .pipe(map((response) => response.map((item: any) => new Faculty(item))));
  }
}
