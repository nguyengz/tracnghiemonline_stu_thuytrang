export interface IQuestionAdd {
  id: number;
  content: string;
  point: number;
  subjectId: number;
  options: { content: string; status: boolean }[];
}
