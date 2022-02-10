import { FC } from 'react';
import { StyledAnswer } from './Answer.styles';

interface AnswerProps {
  answerText: string;
  currentAnswer: string;
  correctAnswer: string;
  onSelectAnswer: (answerText: string) => void;
}

const Answer: FC<AnswerProps> = ({ answerText, currentAnswer, correctAnswer, onSelectAnswer }) => {
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
  const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
  const disabledClass = currentAnswer ? 'disabled-answer' : '';
  return (
    <StyledAnswer
      className={`${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      {answerText}
    </StyledAnswer>
  );
}

export default Answer;