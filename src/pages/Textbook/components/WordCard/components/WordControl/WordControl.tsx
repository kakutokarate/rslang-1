import { FC } from 'react';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';

const WordControl: FC<IWordControlProps> = ({ onDifficultClick }) => {
  return (
    <StyledWordControl>
      <button onClick={onDifficultClick}>Сложное слово</button>
      <button>Изученное слово</button>
    </StyledWordControl>
  );
}

export default WordControl;