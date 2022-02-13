export const shuffleArray = (arr: Array<string>): Array<string> => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const getRandomValueFromArray = (arr: Array<string>): string => {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};
