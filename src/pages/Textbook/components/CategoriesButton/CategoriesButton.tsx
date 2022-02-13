import { FC } from 'react';
import { StyledCategoriesButton } from './CategoriesButton.styles';
import { IButtonProps } from './types';

const CategoriesButton: FC<IButtonProps> = (props) => {
  const { children, backgroundColor, group, onGroupChange, onLoadUserWords } = props;

  const clickHandler = () => {
    if (onGroupChange) {
      onGroupChange(Number(group));
    }

    if (onLoadUserWords) {
      onLoadUserWords();
    }
  }

  return (
    <StyledCategoriesButton backgroundColor={backgroundColor}>
      <button data-group={group} onClick={clickHandler}>
        {children}
      </button>
    </StyledCategoriesButton>
  );
}

export default CategoriesButton;
