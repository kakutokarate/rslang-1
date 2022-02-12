import { FC } from 'react';
import { useTypedSelector } from 'redux/hooks';
import ResultsItem from '../ResultsItem';

import { StyledResultsTable } from './ResultsTable.styles';

const ResultsTable: FC = () => {
  const { rightAnswers, wrongAnswers } = useTypedSelector(state => state.challenge);

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