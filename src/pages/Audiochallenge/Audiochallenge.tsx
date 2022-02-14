import { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchAllWords, fetchUserWords, fetchWordsByGroup } from 'redux/thunks';
import { startChallenge } from 'redux/features/challengeSlice';
import ChallengeCard from './components/ChallengeCard';
import ResultsTable from './components/ResultsTable';

import { Wrapper, StyledButtonsRow } from './Audiochallenge.styles';

const Audiochallenge: FC = () => {
  const { isChallengeStarted, showResult, currentQuestionsSet } = useTypedSelector(state => state.challenge);
  const { fetchAllWordsFulfilled } = useTypedSelector(state => state.words);
  const dispatch = useTypedDispatch();
  const challengeLevels = ['1', '2', '3', '4', '5'];
  const user = JSON.parse(localStorage.getItem('authUserData-zm')!);

  useEffect(() => { dispatch(fetchAllWords()); }, []);
  useEffect(() => {
    if (fetchAllWordsFulfilled === true) dispatch(fetchUserWords(user));
  }, [fetchAllWordsFulfilled]);

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
      {showResult && <ResultsTable />}
    </Wrapper>
  );
};

export default Audiochallenge;
