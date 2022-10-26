import { IWord } from 'model/IWord';

export interface IWordsState {
  allWords: Array<IWord> | [];
  isFetchingAllWords: boolean;
  fetchAllWordsError: null | string;
  fetchAllWordsFulfilled: boolean;
  isFetchingUserWords: boolean;
  fetchUserWordsError: null | string;
  fetchUserWordsFulfilled: boolean;
}
