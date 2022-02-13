import { IWord } from 'model/IWord';
import { getRandomValueFromArray, shuffleArray } from 'utils';
import { NUM_OF_ANSWER_OPTIONS } from './challengeSlice';

export const getAnswers = (
  arr: Array<IWord>,
  currentQuestionIndex: number
): Array<string> => {
  let answers = [arr[currentQuestionIndex].wordTranslate];
  while (answers.length < NUM_OF_ANSWER_OPTIONS) {
    let randomAnswer = getRandomValueFromArray(
      [...arr].map((el) => el.wordTranslate)
    );
    if (!answers.includes(randomAnswer)) {
      answers.push(randomAnswer);
    }
  }
  return shuffleArray(answers);
};
