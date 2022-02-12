import { FC } from 'react';
import { useTypedSelector } from 'redux/hooks';
import { ResultsItemProps } from './types';

import { StyledResultsItem } from './ResultsItem.styles';
import { StyledAudioIcon } from './ResultsItem.styles';

const ResultsItem: FC<ResultsItemProps> = ({ index }) => {
  const questions = useTypedSelector(state => state.challenge.currentQuestionsSet);

  const item = questions.find(el => el.id === index.toString());
  const word = item!.word;
  const translation = item!.wordTranslate;

  return (
    <StyledResultsItem>
      <>
        <StyledAudioIcon />
        {<span>{word}</span>}  -  {<span>{translation}</span>}
      </>
    </StyledResultsItem>
  )
}

export default ResultsItem;