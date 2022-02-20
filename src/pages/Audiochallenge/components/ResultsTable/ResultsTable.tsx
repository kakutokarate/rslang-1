import { IStatistic } from 'model/IStatistic';
import { IUserWord } from 'model/IUserWord';
import { IWord } from 'model/IWord';
import { FC, useEffect } from 'react';
import { saveDailyResults } from 'redux/features/challengeSlice';
import { prepareNewStatistic } from 'redux/features/statisticSlice/utils';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { postUserWord, sendStatistic, updateUserWord } from 'redux/thunks';
import { updateUserWordData } from 'shared/utils';
import { AUDIOCHALLENGE } from 'shared/utils/constants';
import ResultsItem from '../ResultsItem';

import { StyledResultsTable } from './ResultsTable.styles';

const ResultsTable: FC = () => {
  const { rightAnswers, wrongAnswers } = useTypedSelector(state => state.challenge);
  const prevStatistic = useTypedSelector(state => state.statistic.statisticData);
  const allWords = useTypedSelector(state => state.words.allWords);
  const rightWords: Array<IWord> = [];
  const wrongWords: Array<IWord> = [];

  rightAnswers.forEach(el => {
    rightWords.push(allWords.find(item => item._id === el)!);
  });
  wrongAnswers.forEach(el => {
    wrongWords.push(allWords.find(item => item._id === el)!);
  });

  const user = localStorage.getItem('authUserData-zm');
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (user) {
      const userData = JSON.parse(user);
      const userId = userData.userId;
      dispatch(saveDailyResults(userId));
      const newStatistic = prepareNewStatistic(prevStatistic, [...rightAnswers, ...wrongAnswers]) as IStatistic;
      dispatch(sendStatistic({ userData, newStatistic }));
      rightWords.forEach((el) => {
        const newUserWord = updateUserWordData(el, true, AUDIOCHALLENGE) as IUserWord;
        !('userWord' in el)
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));
      });
      wrongWords.forEach((el) => {
        const newUserWord = updateUserWordData(el, false, AUDIOCHALLENGE) as IUserWord;
        !('userWord' in el)
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));
      });
    } else dispatch(saveDailyResults());
  }, [dispatch]);


  return (
    <StyledResultsTable>
      <h2>РЕЗУЛЬТАТЫ АУДИОВЫЗОВА</h2>
      <div>Ошибок - <span>{wrongAnswers.length}</span></div>
      {wrongAnswers.map(el => <ResultsItem key={el} index={el} />)}
      <div>Знаю - <span>{rightAnswers.length}</span></div>
      {rightAnswers.map(el => <ResultsItem key={el} index={el} />)}
    </StyledResultsTable>
  )
}

export default ResultsTable;