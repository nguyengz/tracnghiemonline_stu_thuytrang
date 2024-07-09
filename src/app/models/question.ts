export class Question {
  id: number;
  content: string;
  point: number;
  subjectId: number;
  options: { content: string; status: boolean }[];
  constructor(data?: {
    id?: number;
    content?: string;
    point?: number;
    subjectId?: number;
    options?: { content: string; status: boolean }[];
  }) {
    this.id = data?.id || 0;
    this.content = data?.content || '';
    this.point = data?.point || 0;
    this.subjectId = data?.subjectId || 0;
    this.options = data?.options || [];
  }
}
