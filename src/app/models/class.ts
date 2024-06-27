export class Class {
  id: number;
  nameClass: string;
  faculty: {
    id: number;
    facultyName: string;
  };
  constructor(data?: any) {
    this.id = data?.id || 0;
    this.nameClass = data?.nameClass || '';
    this.faculty = data?.faculty || { id: 0, facultyName: '' };
  }
}
