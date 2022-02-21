import { FC, useEffect } from 'react';
import { useTypedSelector, useTypedDispatch } from 'redux/hooks';
import { selectAnswer, submitAnswer } from 'redux/features/challengeSlice';
import Answer from '../Answer';

import {
  StyledAnswersWrapper,
  StyledChallengeCard,
  StyledButton,
  StyledRightAnswer,
} from './ChallengeCard.styles';
import MemoizedAudio from '../Audio';

const ChallengeCard: FC = () => {
  const {
    currentQuestionsSet,
    currentQuestionIndex,
    currentAnswer,
    answers
  } = useTypedSelector(state => state.challenge);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentAnswer) dispatch(submitAnswer());
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [currentAnswer]);

  const correctAnswer = currentQuestionsSet[currentQuestionIndex].wordTranslate;
  const question = currentQuestionsSet[currentQuestionIndex].word;
  const dispatch = useTypedDispatch();

  const dispatchSelectAnswer = (answerText: string) => {
    dispatch(selectAnswer(answerText));
  }

  const handleNextClick = () => {
    dispatch(submitAnswer());
  }

  return (
    <StyledChallengeCard>
      <MemoizedAudio src={currentQuestionsSet[currentQuestionIndex].audio} />
      {currentAnswer && <StyledRightAnswer>{question}</StyledRightAnswer>}
      <StyledAnswersWrapper>
        {answers.map((answer, index) =>
          <Answer
            key={index}
            value={index + 1}
            answerText={answer}
            correctAnswer={correctAnswer}
            currentAnswer={currentAnswer}
            onSelectAnswer={() => dispatchSelectAnswer(answer)}
          />)}
      </StyledAnswersWrapper>
      {currentAnswer && <StyledButton onClick={handleNextClick}>
        NEXT
      </StyledButton>}
    </StyledChallengeCard>
  );
};

export default ChallengeCard;