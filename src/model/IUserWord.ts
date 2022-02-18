type TDifficulty = 'difficult' | 'easy';

export interface IUserWord {
  difficulty: TDifficulty;
  wordId?: string;
  userId?: string;
  optional?: {
    counter: number | null; // для выставления признака изученного слова, инкремент при правильном ответе, обнуление при неправильном
  };
}
