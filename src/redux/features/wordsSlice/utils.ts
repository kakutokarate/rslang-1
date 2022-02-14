import { IUserWord } from 'model/IUserWord';
import { IWord } from 'model/IWord';

export const combineAllWordsWithUserWords = (
  allWords: Array<IWord>,
  userWords: Array<IUserWord>
): any => {
  let userWordsData = [...userWords];
  let userWordsIds = userWordsData.map((el) => el.wordId);
  let result = [...allWords].map((item) => {
    if (userWordsIds.indexOf(item._id!) !== -1) {
      item = {
        ...item,
        userField: userWordsData.find((el) => el.wordId === item._id),
      };
    }
    return item;
  });
  return result;
};
