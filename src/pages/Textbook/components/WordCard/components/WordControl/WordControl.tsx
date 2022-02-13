import { FC } from 'react';
import WordButton from './components';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';

const WordControl: FC<IWordControlProps> = ({ onDifficultClick }) => {
  return (
    <StyledWordControl>
      {/* <WordButton makeDifficult={makeDifficult}>Сложное слово</WordButton>
      <WordButton>Изученное слово</WordButton> */}
      <button onClick={onDifficultClick}>Сложное слово</button>
      <button>Изученное слово</button>
    </StyledWordControl>
  );
}

export default WordControl;