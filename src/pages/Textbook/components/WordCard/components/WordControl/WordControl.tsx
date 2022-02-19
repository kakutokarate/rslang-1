import { FC } from 'react';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';

const WordControl: FC<IWordControlProps> = ({
  mode,
  isDifficult,
  onDifficultClick,
  onDeleteWord,
  onLearnedClick,
}) => {
  const isDisabled = isDifficult ? true : false;

  return (
    <StyledWordControl>
      {mode === 'textbook' && (
        <>
          <button onClick={onDifficultClick} disabled={isDisabled}>
            Сложное слово
          </button>
          <button onClick={onLearnedClick}>Изученное слово</button>
        </>
      )}
      {mode === 'dictionary' && (
        <button onClick={onDeleteWord}>Удалить слово</button>
      )}
    </StyledWordControl>
  );
};

export default WordControl;