import { IUserWord } from 'model/IUserWord';
import { IWord } from 'model/IWord';

export interface IChallengeState {
  challengeLevel: string;
  currentQuestionsSet: Array<IWord>;
  currentQuestionIndex: number;
  answers: Array<string>;
  currentAnswer: string;
  rightAnswers: Array<string>;
  wrongAnswers: Array<string>;
  showResult: boolean;
  isChallengeStarted: boolean;
  isFetchingWords: boolean;
  fetchWordsError: null | string;
  results: Array<IUserWord>;
  currentRightStreak: number;
  bestGameStreak: number;
}
