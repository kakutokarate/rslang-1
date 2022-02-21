import { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchAllWords, fetchUserWords, fetchWordsByGroup, getStatistic, sendStatistic } from 'redux/thunks';
import { NUM_OF_QUESTIONS, setAnswersSet, setInitialChallengeState, setWordsByLevel, startChallenge, startChallengeByLevel } from 'redux/features/challengeSlice';
import ChallengeCard from './components/ChallengeCard';
import ResultsTable from './components/ResultsTable';

import { Wrapper, StyledButtonsRow } from './Audiochallenge.styles';
import { getWordsByGroup, getWordsByPageAndGroup, getWordsFromTextbookForUser, shuffleArray } from 'shared/utils';
import { CircularProgress } from '@mui/material';

const Audiochallenge: FC = () => {
  const { isStartedFromTextbook, isChallengeStarted, showResult, currentQuestionsSet } = useTypedSelector(state => state.challenge);
  const { fetchAllWordsFulfilled, fetchUserWordsFulfilled, allWords } = useTypedSelector(state => state.words);
  const { groupNumber: group, pageNumber: page } = useTypedSelector(state => state.textbook);
  const dispatch = useTypedDispatch();
  const challengeLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const user = localStorage.getItem('authUserData-zm');
  const isShowLevel = !isStartedFromTextbook && !isChallengeStarted && !showResult && fetchAllWordsFulfilled;

  useEffect(() => {
    if (!user) dispatch(fetchAllWords());
    if (user) {
      dispatch(getStatistic(JSON.parse(user)));
      const updateWords = async () => {
        await dispatch(fetchAllWords());
        dispatch(fetchUserWords(JSON.parse(user)));
      };
      updateWords();
    }
  }, []);
  useEffect(() => {
    if (isStartedFromTextbook && !user && fetchAllWordsFulfilled) {
      console.log('CASE1');
      dispatch(setAnswersSet(allWords));
      const currentWords = shuffleArray(getWordsByPageAndGroup(allWords, group, page)).slice(NUM_OF_QUESTIONS);
      dispatch(setWordsByLevel(currentWords));
    }
  }, []);
  useEffect(() => {
    if (isStartedFromTextbook && user && fetchUserWordsFulfilled) {
      console.log('CASE2');
      dispatch(setAnswersSet(allWords));
      const currentWords = getWordsFromTextbookForUser(allWords, group, page, NUM_OF_QUESTIONS);
      dispatch(setWordsByLevel(currentWords));
      dispatch(startChallenge());
    }
  }, []);

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
      {fetchAllWordsFulfilled && isChallengeStarted && !showResult && currentQuestionsSet.length && <ChallengeCard />}
      {showResult && <ResultsTable />}
    </Wrapper>
  );
};

export default Audiochallenge;
