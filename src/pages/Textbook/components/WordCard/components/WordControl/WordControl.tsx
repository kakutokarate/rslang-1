import { FC } from 'react';
import WordButton from './components';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';

const WordControl: FC<IWordControlProps> = ({ makeDifficult }) => {
  return (
    <StyledWordControl>
      <WordButton makeDifficult={makeDifficult}>Сложное слово</WordButton>
      <WordButton>Изученное слово</WordButton>
    </StyledWordControl>
  );
}

export default WordControl;