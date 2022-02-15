import { IWord } from 'model/IWord';

export const combineWords = (clearWords: IWord[], userWords: IWord[]) => {
  return clearWords.map((cw): IWord => {
    const word = userWords.find((uw) => cw.id === uw._id);

    if (word) {
      return { ...cw, userWord: word!.userWord };
    }

    return { ...cw};
  });
}
