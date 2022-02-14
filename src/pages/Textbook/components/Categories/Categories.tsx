import { changeGroupNumber } from 'redux/features/textbookSlice/textBookSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { getUserWords } from 'redux/thunks';
import CategoriesButton from '../CategoriesButton';
import { StyledCategories } from './Categories.styles';
import { groupButtonData } from './config';

const Categories = () => {
  const { authUserData } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();

  const onGroupChange = (number: number) => {
    localStorage.setItem('groupNumber-nsv', String(number));
    dispatch(changeGroupNumber({ groupNumber: number }));
  };

  const onLoadUserWords = () => {
    const authUser = JSON.parse(localStorage.getItem('authUserData-zm')!);

    dispatch(getUserWords({
      userId: authUser.userId,
      token: authUser.token,
    }));
  };

  const buttonElements = groupButtonData.map((b, idx) => (
    <CategoriesButton
      key={idx + 1}
      backgroundColor={b.color}
      group={String(idx + 1)}
      onGroupChange={onGroupChange}
    >
      {b.name}
    </CategoriesButton>
  ));

  return (
    <StyledCategories>
      {buttonElements}
      {authUserData && (
        <CategoriesButton
          backgroundColor={'#319795'}
          onLoadUserWords={onLoadUserWords}
        >
          Сложные слова
        </CategoriesButton>
      )}
    </StyledCategories>
  );
};

export default Categories;