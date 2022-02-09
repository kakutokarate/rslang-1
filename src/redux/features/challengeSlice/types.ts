import { IWord } from 'model/IWord';

export interface IChallengeState {
  currentQuestionsSet: Array<IWord>;
  currentQuestionIndex: number;
  answers: Array<string>;
  currentAnswer: string;
  rightAnswers: Array<string>;
  wrongAnswers: Array<string>;
  showResult: boolean;
  isChallengeStarted: boolean;
}
