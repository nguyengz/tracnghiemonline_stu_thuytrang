export class Examquestion {
  //   id: number;
  examId: number;
  questionId: number;

  constructor(data?: any) {
    this.examId = data?.examId || 0;
    this.questionId = data?.questionId || 0;
  }
}
