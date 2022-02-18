import { FC, useEffect } from 'react';
import { saveResults } from 'redux/features/challengeSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import ResultsItem from '../ResultsItem';

import { StyledResultsTable } from './ResultsTable.styles';

const ResultsTable: FC = () => {
  const { rightAnswers, wrongAnswers } = useTypedSelector(state => state.challenge);
  const prevWords = useTypedSelector(state => state.words.allWords);
  const dispatch = useTypedDispatch();
  const user = localStorage.getItem('authUserData-zm');
  useEffect(() => {
    if (user) {
      const parsedUserData = JSON.parse(user);
      const userId = parsedUserData.userId.toString();
      dispatch(saveResults(userId));
    } else dispatch(saveResults());
  }, []);


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