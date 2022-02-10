import { FC } from 'react';
import { AnswerProps } from './types';

import { StyledAnswer } from './Answer.styles';

const Answer: FC<AnswerProps> = ({ answerText, currentAnswer, correctAnswer, onSelectAnswer }) => {
  const isCorrect = Boolean(currentAnswer && answerText === correctAnswer);
  const isWrong = Boolean(currentAnswer === answerText && currentAnswer !== correctAnswer);

  return (
    <StyledAnswer
      isCorrectAnswer={isCorrect}
      isWrongAnswer={isWrong}
      onClick={() => onSelectAnswer(answerText)}
    >
      {answerText}
    </StyledAnswer>
  );
}

export default Answer;