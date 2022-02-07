import { FC } from 'react';
import { StyledAnswer } from './Answer.styles';

const Answer = ({ answerText, currentAnswer, correctAnswer, onSelectAnswer }: any) => {
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <StyledAnswer
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      {answerText}
    </StyledAnswer>
  );
}

export default Answer;