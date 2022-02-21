import { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchAllWords, fetchUserWords, fetchWordsByGroup, getStatistic, sendStatistic } from 'redux/thunks';
import { NUM_OF_QUESTIONS, setAnswersSet, setInitialChallengeState, setWordsByLevel, startChallengeByLevel } from 'redux/features/challengeSlice';
import ChallengeCard from './components/ChallengeCard';
import ResultsTable from './components/ResultsTable';

import { Wrapper, StyledButtonsRow } from './Audiochallenge.styles';
import { getWordsByGroup, shuffleArray } from 'shared/utils';
import { CircularProgress } from '@mui/material';

const Audiochallenge: FC = () => {
  const { isChallengeStarted, showResult, currentQuestionsSet } = useTypedSelector(state => state.challenge);
  const { fetchAllWordsFulfilled, allWords } = useTypedSelector(state => state.words);
  const dispatch = useTypedDispatch();
  const challengeLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const user = localStorage.getItem('authUserData-zm');
  const isShowLevel = !isChallengeStarted && !showResult && fetchAllWordsFulfilled;

  useEffect(() => {
    dispatch(fetchAllWords());
    if (user) dispatch(getStatistic(JSON.parse(user)));
  }, []);
  useEffect(() => {
    if (user && fetchAllWordsFulfilled === true) dispatch(fetchUserWords(JSON.parse(user)));
  }, [fetchAllWordsFulfilled]);
  useEffect(() => {
    return () => {
      dispatch(setInitialChallengeState());
    };
  }, []);

  const onSubmitLevel = (level: number) => {
    const levelWords = getWordsByGroup(allWords, level);
    const gameSet = shuffleArray(levelWords).slice(0, NUM_OF_QUESTIONS);
    dispatch(setAnswersSet(levelWords));
    dispatch(setWordsByLevel(gameSet));
    dispatch(startChallengeByLevel(level.toString()));
  }

  return (
    <Wrapper>
      {!fetchAllWordsFulfilled && <CircularProgress />}
      {isShowLevel &&
        <div>Выберите сложность</div>}
      {isShowLevel && <StyledButtonsRow>
        {challengeLevels.map(el =>
          <div key={el} onClick={() => onSubmitLevel(challengeLevels.indexOf(el))}>{el}</div>
        )}
      </StyledButtonsRow>
      }
      {isChallengeStarted && !showResult && currentQuestionsSet.length && <ChallengeCard />}
      {showResult && <ResultsTable />}
    </Wrapper>
  );
};

export default Audiochallenge;
