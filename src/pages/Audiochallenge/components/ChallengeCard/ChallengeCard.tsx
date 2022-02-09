import { FC, useEffect } from 'react';
import { useTypedSelector, useTypedDispatch } from 'redux/hooks';
import { selectAnswer } from 'redux/features/challengeSlice';
import Answer from '../Answer';
import { ENDPOINT } from 'redux/thunks';

import {
  StyledAnswersWrapper,
  StyledChallengeCard,
  StyledButton
} from './ChallengeCard.styles';

const ChallengeCard: FC = () => {
  const {
    currentQuestionsSet,
    currentQuestionIndex,
    currentAnswer,
    answers
  } = useTypedSelector(state => state.challenge);

  const audio = new Audio(`${ENDPOINT}${currentQuestionsSet[currentQuestionIndex].audio}`);

  useEffect(() => {
    audio.play();
  }, []);

  const correctAnswer = currentQuestionsSet[currentQuestionIndex].wordTranslate;
  const dispatch = useTypedDispatch();

  const dispatchSelectAnswer = (answerText: string) => {
    dispatch(selectAnswer(answerText));
  }
  return (
    <StyledChallengeCard>
      <h2>Добавить иконку аудио</h2>
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
      <StyledButton>
        NEXT
      </StyledButton>
    </StyledChallengeCard>
  );
};

export default ChallengeCard;