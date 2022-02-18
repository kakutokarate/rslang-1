import { IDailyResult } from 'model/IStatistic';
import { IWord } from 'model/IWord';

export interface IStatisticState {
  learnedWordsCount: number;
  learnedWords: Array<IWord>;
  dailyResults: Array<IDailyResult>;
}
