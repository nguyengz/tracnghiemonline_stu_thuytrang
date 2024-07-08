import { Option } from './option';

export class QuestionOfExam {
  id: number;
  content: string;
  options: Option[];

  constructor(data?: any) {
    this.id = data?.id || 0;
    this.content = data?.content || '';
    this.options = data?.options || null;
  }
}
