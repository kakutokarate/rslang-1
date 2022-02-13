import { FC } from 'react';
import { StyledWordButton } from './WordButton.styles';
import { IWordBtnProps } from './types';

const WordButton: FC<IWordBtnProps> = ({ makeDifficult, children }) => {
  return (
    <StyledWordButton onClick={makeDifficult}>
      {children}
    </StyledWordButton>
  )
}

export default WordButton;