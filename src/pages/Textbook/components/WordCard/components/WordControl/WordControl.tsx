import { FC } from 'react';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import DoneOutlineSharpIcon from '@mui/icons-material/DoneOutlineSharp';

const WordControl: FC<IWordControlProps> = ({
  mode,
  userWord,
  onDifficultClick,
  onDeleteWord,
  onLearnedClick,
}) => {
  const isDisabledDifficultBtn =
    userWord?.difficulty === 'difficult' ? true : false;

  const isDisabledLearnedBtn =
    userWord?.difficulty === 'easy' &&
    userWord.optional.counter >= 3
      ? true
      : false;

  return (
    <StyledWordControl>
      {mode === 'textbook' && (
        <>
          <button
            onClick={onDifficultClick}
            disabled={isDisabledDifficultBtn || isDisabledLearnedBtn}
          >
            <LocalFireDepartmentSharpIcon />
          </button>
          <button onClick={onLearnedClick} disabled={isDisabledLearnedBtn}>
            <DoneOutlineSharpIcon />
          </button>
        </>
      )}
      {mode === 'dictionary' && (
        <button onClick={onDeleteWord}>Удалить слово</button>
      )}
    </StyledWordControl>
  );
};

export default WordControl;