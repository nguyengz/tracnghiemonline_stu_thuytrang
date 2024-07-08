import { IQuestion } from './iquestion';

export interface IQuestionReponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: IQuestion[];
  number: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  empty: boolean;
}
