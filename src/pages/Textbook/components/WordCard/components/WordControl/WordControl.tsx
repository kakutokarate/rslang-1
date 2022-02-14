import { FC } from 'react';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';

const WordControl: FC<IWordControlProps> = ({ mode, onDifficultClick }) => {
  return (
    <StyledWordControl>
      {mode === 'textbook' && (
        <>
          <button onClick={onDifficultClick}>Сложное слово</button>
          <button>Изученное слово</button>
        </>
      )}
      {mode === 'dictionary' && <button>Удалить слово</button>}
    </StyledWordControl>
  );
}

export default WordControl;