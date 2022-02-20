import { IWord } from "model/IWord";

type TGetIWords = (arg1: string[], arg2: IWord[]) => IWord[];

// export const getIWords: TGetIWords = (IdsArr, collection) => {
//   const words = IdsArr
//     .map(id => {
//       return collection.find(word => word._id === id);
//     })
//     .filter(el => el !== undefined);


//   return words;
// };