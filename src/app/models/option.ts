export class Option {
  id: number;
  content: string;
  status: boolean;

  constructor(data?: any) {
    this.id = data?.id || 0;
    this.content = data?.content || '';
    this.status = data?.status || false;
  }
}
