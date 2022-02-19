import { IAuth } from 'model/IAuth';
import { IStatistic } from 'model/IStatistic';
import { FC, useEffect } from 'react';
import { saveResults } from 'redux/features/challengeSlice';
import { prepareNewStatistic } from 'redux/features/statisticSlice/utils';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { sendStatistic } from 'redux/thunks';
import ResultsItem from '../ResultsItem';

import { StyledResultsTable } from './ResultsTable.styles';

const ResultsTable: FC = () => {
  const { rightAnswers, wrongAnswers } = useTypedSelector(state => state.challenge);
  const prevStatistic = useTypedSelector(state => state.statistic.statisticData);
  const dispatch = useTypedDispatch();
  const user = localStorage.getItem('authUserData-zm');
  useEffect(() => {
    if (user) {
      const userData = JSON.parse(user);
      const userId = userData.userId.toString();
      dispatch(saveResults(userId));
      const newStatistic = prepareNewStatistic(prevStatistic, [...rightAnswers, ...wrongAnswers]) as IStatistic;
      dispatch(sendStatistic({ userData, newStatistic }));
    } else dispatch(saveResults());
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