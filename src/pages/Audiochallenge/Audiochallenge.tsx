import { FC } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchWordsByGroup } from 'redux/thunks';
import { startChallenge } from 'redux/features/challengeSlice';
import ChallengeCard from './components/ChallengeCard';

import { Wrapper, StyledButtonsRow } from './Audiochallenge.styles';

const Audiochallenge: FC = () => {
  const { isChallengeStarted, showResult, currentQuestionsSet } = useTypedSelector(state => state.challenge);
  const dispatch = useTypedDispatch();
  const challengeLevels = ['1', '2', '3', '4', '5'];

  const onSubmitLevel = (level: string) => {
    dispatch(fetchWordsByGroup(level));
    dispatch(startChallenge(level));
  }

  return (
    <Wrapper>
      {!isChallengeStarted && !showResult &&
        <div>Выберите сложность</div>}
      {!isChallengeStarted
        && !showResult && <StyledButtonsRow>
          {challengeLevels.map(el =>
            <div key={Number(el) - 1} onClick={() => onSubmitLevel((Number(el) - 1).toString())}>{el}</div>
          )}
        </StyledButtonsRow>
      }
      {isChallengeStarted && !showResult && currentQuestionsSet.length && <ChallengeCard />}
      {showResult && <div>РЕЗУЛЬТАТЫ</div>}
    </Wrapper>
  );
};

export default Audiochallenge;
