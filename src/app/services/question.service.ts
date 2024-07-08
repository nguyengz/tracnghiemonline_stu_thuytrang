import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { IQuestionReponse } from '../interfaces/iquestion-reponse';
import { Subject } from '../models/subject';
import { IQuestionAdd } from '../interfaces/iquestion-add';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this.http
      .get<any>(`${this.baseUrl}/subjects`)
      .pipe(map((response) => response.map((item: any) => new Subject(item))));
  }

  getQuestions(): Observable<IQuestionReponse> {
    return this.http.get<IQuestionReponse>(`${this.baseUrl}/questions`);
  }
  createQuestion(question: IQuestionAdd): Observable<IQuestionAdd> {
    return this.http.post<IQuestionAdd>(`${this.baseUrl}/questions`, question);
  }
}
