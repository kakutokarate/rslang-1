import { IWord } from "model/IWord";

export interface answeredWord {
  word: string | null;
  answerResult: boolean | null;
  translation: string | null;
  currentWord: string | null;
};

export interface ISprintState {
  isSprintRunning: boolean;
  isGameOver: boolean;
  currentPlayedCollection: IWord[];
  currentWordIndex: number;
  pickedGroup: null | number;
  answeredWords: answeredWord[];
  lastBestSeries: number,
  currentCorrectAnswersSeries: number,
};