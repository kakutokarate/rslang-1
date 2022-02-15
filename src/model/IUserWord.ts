type TDifficulty = 'difficult' | '';

export interface IUserWord {
  difficulty: TDifficulty;
  wordId?: string;
  userId?: string;
  optional?: {
    startDate: string; // строка в формате ISO для подсчета статистики кол-во новых слов за день
    isLearned: boolean;
    counter: number; // для выставления признака изученного слова, инкремент при правильном ответе, обнуление при неправильном
    games: {
      sprint: {
        correct: number;
        wrong: number;
      };
      challenge: {
        correct: number;
        wrong: number;
      };
    };
  };
}
