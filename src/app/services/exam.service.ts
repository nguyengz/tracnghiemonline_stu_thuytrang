import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ExamDetail } from '../models/exam-detail';
import { Exam } from '../models/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private baseUrl: string = environment.apiUrl; // Your API URL
  private headers = environment.headers;
  constructor(private http: HttpClient) {}

  getExamDetail(examID: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/exam-questions/exam/${examID}`);
  }

  // getExamDetail(examID: number): Observable<any> {
  //   return this.http
  //     .get<any>(`${this.baseUrl}/examquestions/${examID}`)
  //     .pipe(
  //       map((response) => response.map((item: any) => new ExamDetail(item)))
  //     );
  // }
  getExamBySubject(subjectID: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/exams/bySubject/${subjectID}`);
  }
  createExam(exam: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, exam);
  }
  addExam(exam: Exam): Observable<Exam> {
    const body = JSON.stringify(exam);
    return this.http.post<Exam>(`${this.baseUrl}/exams`, body, {
      headers: this.headers,
    });
  }
}
