import { FC } from 'react';
import { StyledDictionaryButton } from './DictionaryButton.styles';
import { IDictBtnProps } from './types';

const DictionaryButton: FC<IDictBtnProps> = ({ makeDifficult, children }) => {
  return (
    <StyledDictionaryButton onClick={makeDifficult}>
      {children}
    </StyledDictionaryButton>
  )
}

export default DictionaryButton;