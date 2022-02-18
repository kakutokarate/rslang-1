type TDifficulty = 'difficult' | 'easy';

export interface IUserWord {
  difficulty: TDifficulty;
  wordId?: string;
  userId?: string;
  optional?: {
    startStudying: string | null; // строка в формате ISO для подсчета статистики кол-во новых слов за день
    isLearned: boolean; // 3 попытки угаданы правильно подряд
    // gamesData: [
    //   {
    //     date: '16-02-2022'; //5e9f5ee35eb9e72bc21af6fa
    //     game: 'sprint'; //user 6209ab25b45ca9001665429f
    //     result: true; // если на указанную дату уже стоит true - не меняем, для процент правильных ответов
    //     correctCounter: 3; // если больше 0 - для статистики считаем изученным
    //     wrongCounter: 2;
    //   },
    //   {
    //     date: '16-02-2022'; //5e9f5ee35eb9e72bc21af6fa
    //     game: 'challenge'; //user 6209ab25b45ca9001665429f
    //     result: false; // если на указанную дату уже стоит true - не меняем
    //   }
    // ]; // массив дат когда слово стало изученным
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
