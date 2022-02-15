import { IWord } from "model/IWord";

export interface answeredWord {
  [k: string]: {
    answerResult: boolean | null;
    translation: string | null;
    currentWord: string | null;
  }
};

export interface ISprintState {
  isSprintRunning: boolean;
  isGameOver: boolean;
  currentPlayedCollection: null | IWord[];
  currentWordIndex: number;
  pickedGroup: null | number;
  answeredWords: answeredWord[];
};