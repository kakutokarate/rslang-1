import { TGetWordsByGroup } from "./types";

export const shuffleArray = <T>(arr: Array<T>): Array<T> => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const getRandomValueFromArray = <T>(arr: Array<T>): T => {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};

export const getWordsByGroup: TGetWordsByGroup = (words, group) => {
  return words.filter(word => word.group === group);
};