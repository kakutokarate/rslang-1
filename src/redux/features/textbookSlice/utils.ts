import { IWord } from 'model/IWord';

export const combineWords = (clearWords: IWord[], userWords: IWord[]) => {
  return clearWords.map((cw): IWord => {
    const word = userWords.find((uw) => cw.id === uw._id);

    if (word) {
      return {
        ...cw,
        userWord: {
          ...word.userWord,
          difficulty: word!.userWord!.difficulty,
          optional: { ...word!.userWord!.optional, wordId: word._id as string },
        },
      };
    }

    return { ...cw };
  });
};

export const createInitOptional = (
  id: string,
  count: number,
) => {
  return {
      counter: count,
      wordId: id,
      sprint: {
        rightCounter: 0,
        wrongCounter: 0,
      },
      audiochallenge: {
        rightCounter: 0,
        wrongCounter: 0,
      },
  };
};

export const createInitUserWord = (
  wordId: string,
  count: number,
  difficulty?: 'difficult' | 'easy',
) => {
  return {
    difficulty: difficulty ? difficulty : 'easy',
    wordId,
    optional: createInitOptional(wordId, count),
  };
};
