import { IDailyResult } from 'model/IStatistic';
import { IWord } from 'model/IWord';

export interface IStatisticState {
  learnedWordsCount: number;
  learnedWordsIds: {
    [prop: string]: number;
  };
  dailyResults: {
    [prop: string]: IDailyResult;
  };
  isLoadingStatistic: boolean;
  statisticLoaded: boolean;
  statisticError: string | null;
}
