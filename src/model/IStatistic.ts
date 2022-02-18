import { IWord } from './IWord';

interface IDailyResult {
  date: string;
  newWordsCounter: number;
  allWordsCounter: number;
}
export interface IStatistic {
  id?: string;
  learnedWordsCounter: number;
  optional: {
    learnedWords: Array<IWord>;
    dailyResults: Array<IDailyResult>;
  };
}
