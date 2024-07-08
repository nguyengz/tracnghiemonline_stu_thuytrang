export interface IQuestionAdd {
  content: string;
  point: number;
  subjectId: number;
  options: { content: string; status: boolean }[];
}
