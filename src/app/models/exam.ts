import { Subject } from './subject';

export class Exam {
  id: number;
  name: string;
  totalPoints: number;
  duration: number;
  subject: {
    id: number;
    subjectName: string;
  };
  title: string;

  constructor(data?: any) {
    this.id = data?.id || 0;
    this.name = data?.name || '';
    this.totalPoints = data?.totalPoints || 0;
    this.duration = data?.duration || 0;
    this.subject = data?.subject || {};
    this.title = data?.title || '';
  }
}
