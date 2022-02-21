import { FC, useEffect } from 'react';
import { AnswerProps } from './types';

import { StyledAnswer } from './Answer.styles';
import { useTypedDispatch } from 'redux/hooks';
import { selectAnswer } from 'redux/features/challengeSlice';

const Answer: FC<AnswerProps> = ({ value, answerText, currentAnswer, correctAnswer, onSelectAnswer }) => {
  const isCorrect = Boolean(currentAnswer && answerText === correctAnswer);
  const isWrong = Boolean(currentAnswer === answerText && currentAnswer !== correctAnswer);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (Number(e.key) === value) {
        dispatch(selectAnswer(answerText));
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [answerText]);

  return (
    <StyledAnswer
      isCorrectAnswer={isCorrect}
      isWrongAnswer={isWrong}
      onClick={() => onSelectAnswer(answerText)}
    >
      {`${value}. ${answerText}`}
    </StyledAnswer>
  );
}

export default Answer;