export class Subject {
  id: number;
  subjectName: string;

  constructor(data?: any) {
    this.id = data?.id || 0;
    this.subjectName = data?.subjectName || '';
  }
}
