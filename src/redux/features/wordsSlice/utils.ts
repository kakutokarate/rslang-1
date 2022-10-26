import { IUserWord } from 'model/IUserWord';
import { IWord } from 'model/IWord';

export const combineAllWordsWithUserWords = (
  allWords: Array<IWord>,
  userWords: Array<IUserWord>
): Array<IWord> => {
  const userWordsData = [...userWords];
  const userWordsIds = userWordsData.map((el) => el.optional.wordId);
  const result = [...allWords].map((item) => {
    if (userWordsIds.indexOf(item._id!) !== -1) {
      item = {
        ...item,
        userWord: userWordsData.find((el) => el.optional.wordId === item._id),
      };
    }
    return item;
  });
  return result;
};
