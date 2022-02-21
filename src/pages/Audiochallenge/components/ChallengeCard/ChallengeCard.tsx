import { FC, useEffect } from 'react';
import { useTypedSelector, useTypedDispatch } from 'redux/hooks';
import { Audiotrack } from '@mui/icons-material';
import { selectAnswer, submitAnswer } from 'redux/features/challengeSlice';
import Answer from '../Answer';
import { BASE_URL } from 'redux/thunks';

import {
  StyledAnswersWrapper,
  StyledChallengeCard,
  StyledButton,
} from './ChallengeCard.styles';
import MemoizedAudio from '../Audio';

const ChallengeCard: FC = () => {
  const {
    currentQuestionsSet,
    currentQuestionIndex,
    currentAnswer,
    answers
  } = useTypedSelector(state => state.challenge);

  const correctAnswer = currentQuestionsSet[currentQuestionIndex].wordTranslate;
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
      <StyledAnswersWrapper>
        {answers.map((answer, index) =>
          <Answer
            key={index}
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