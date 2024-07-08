import { QuestionOfExam } from './question-of-exam';

export class ExamDetail {
  examId: number;
  examTitle: string; // Allow examTitle to be null
  questions: QuestionOfExam[];

  constructor(data: any) {
    this.examId = data.id || 0;
    this.examTitle = data.examTitle || '';
    this.questions = data.questions || null;
  }
}
