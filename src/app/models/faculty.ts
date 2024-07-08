export class Faculty {
  id: number;
  facultyName: string;

  constructor(data?: any) {
    this.id = data?.id || 0;
    this.facultyName = data?.facultyName || '';
  }
}
