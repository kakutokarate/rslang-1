import { FC } from 'react';
import { useTypedSelector, useTypedDispatch } from 'redux/hooks';
import { selectAnswer } from 'redux/challengeSlice';
import Answer from '../Answer';
import { StyledAnswersWrapper, StyledChallengeCard } from './ChallengeCard.styles';

const ChallengeCard: FC = () => {
  const { currentQuestionsSet, currentQuestionIndex, currentAnswer, answers } = useTypedSelector(state => state.challenge);
  const audio = new Audio(`https://rsschool-ll.herokuapp.com/${currentQuestionsSet[currentQuestionIndex].audio}`);
  console.log(audio);
  audio.play();
  const correctAnswer = currentQuestionsSet[currentQuestionIndex].wordTranslate;
  const dispatch = useTypedDispatch();

  const dispatchSelectAnswer = (answerText: string) => {
    // dispatch(selectAnswer(answerText));
    console.log(answerText);
  }
  return (
    <StyledChallengeCard><h2>Добавить иконку аудио</h2>
      <StyledAnswersWrapper>
        {answers.map((answer, index) =>
          <Answer
            key={index}
            answerText={answer}
            correctAnswer={correctAnswer}
            currentAnswer={currentAnswer}
            onSelectAnswer={dispatchSelectAnswer(answer)}
          />)}
      </StyledAnswersWrapper>
    </StyledChallengeCard>
  );
};

export default ChallengeCard;