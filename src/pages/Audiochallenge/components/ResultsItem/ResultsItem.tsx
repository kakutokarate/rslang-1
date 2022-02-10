import { FC } from 'react';
import { useTypedSelector } from 'redux/hooks';

import { StyledResultsItem } from './ResultsItem.styles';

interface ResultsItemProps {
  index: string;
}

const ResultsItem: FC<ResultsItemProps> = ({ index }) => {
  const questions = useTypedSelector(state => state.challenge.currentQuestionsSet);

  const item = questions.find(el => el.id === index.toString());
  const word = item!.word;
  const translation = item!.wordTranslate;

  return (
    <StyledResultsItem>
      {`${word} - ${translation}`}
    </StyledResultsItem>
  )
}

export default ResultsItem;