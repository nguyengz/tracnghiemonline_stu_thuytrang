export class Question {
  content: string;
  point: number;
  subjectId: number;
  options: { content: string; status: boolean }[];
  constructor(data?: {
    content?: string;
    point?: number;
    subjectId?: number;
    options?: { content: string; status: boolean }[];
  }) {
    this.content = data?.content || '';
    this.point = data?.point || 0;
    this.subjectId = data?.subjectId || 0;
    this.options = data?.options || [];
  }
}
