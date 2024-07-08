import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Faculty } from '../models/faculty';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FacultieService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFaculties(): Observable<Faculty[]> {
    return this.http
      .get<any>(`${this.baseUrl}/faculties`)
      .pipe(map((response) => response.map((item: any) => new Faculty(item))));
  }
}
